import fs from "fs";
import path from "path";
import { loadRenames, resolver } from "./renames.mjs";

const ICONS_DIR = path.resolve("icons");
const SRC_DIR = path.resolve("src");

/*
 * Categories come from scripts/icon-categories.json, one line per icon. It is
 * a map and not a
 * table of prefix rules on purpose: the sheets put Pen with the messaging
 * icons and PenTool with the design ones, Star with the reactions and
 * StarFall with the sky, and no ordering of regexes keeps that straight for
 * long. Recategorising an icon is editing its line.
 *
 * Nothing falls through to a grab bag. A name absent from the map is a new
 * icon nobody has filed yet, and the run says so and exits — the map covering
 * every drawing is the property worth keeping.
 */
const { categories: CATEGORY_LABELS, icons: ICON_CATEGORIES } = JSON.parse(
  fs.readFileSync(path.resolve("scripts/icon-categories.json"), "utf-8"),
);

for (const [name, category] of Object.entries(ICON_CATEGORIES)) {
  if (!CATEGORY_LABELS[category]) {
    throw new Error(`${name} is filed under ${category}, which has no label.`);
  }
}

/*
 * What people type for a word in an icon's name, from scripts/search-terms.json.
 * One way only: the name word brings in its synonyms, never the reverse.
 * Mapping back is what filed UserRemove under "trash" (via "remove") and
 * TruckTime under "calendar" (via "time"), and those keywords outranked the
 * real icons in both searches. Keys are singular; "settings" matches "setting".
 *
 * `spelling` splits names glued into one word (Wineglass, Videocamera) into
 * the words people type and the model reads. The export names stay as they
 * are; only the search words change. Misspelled upstream names were fixed by
 * renaming them, in scripts/renames.json.
 *
 * Words that only describe the drawing (square, minimalistic, left, alt) are
 * left out on purpose: they say nothing about what the icon means.
 */
const { spelling: SPELLING, synonyms: SYNONYMS } = JSON.parse(
  fs.readFileSync(path.resolve("scripts/search-terms.json"), "utf-8"),
);

function extractCategory(name) {
  const category = ICON_CATEGORIES[name];
  if (!category) {
    throw new Error(
      `${name} has no category. Add it to scripts/icon-categories.json.`,
    );
  }
  return category;
}

/*
 * Keywords come from the name alone. They used to include what the SVG was
 * built from too (path, curved, arc, closed, circle...), which put "path" on
 * every icon and "curved"/"closed" on nearly all. Nobody searches for a closed
 * path, and words shared by every icon pull every embedding towards the same
 * point, so the meaning search could barely tell Eye from Moon.
 */
function extractKeywords(name) {
  // Acronyms stay whole: CPUBolt is "cpu bolt", not "c p u bolt".
  const words = name
    .match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g)
    .map((w) => w.toLowerCase());
  // "Wi Fi", "Full Screen", "Q R": the joined form is what people type.
  const joined = words.slice(1).map((w, i) => words[i] + w);
  // Html5, Grid3x3: the number is not part of the word.
  const bare = words.map((w) => w.replace(/\d+$/, "")).filter((w) => w.length > 1);
  const fixed = bare.flatMap((w) => SPELLING[w]?.split(" ") ?? []);

  const keywords = new Set([...words, ...bare, ...fixed]);
  for (const w of [...bare, ...joined, ...fixed]) {
    const synonyms = SYNONYMS[w] ?? SYNONYMS[w.replace(/s$/, "")];
    if (synonyms) [w, ...synonyms].forEach((s) => keywords.add(s));
  }

  return [...keywords].filter((k) => k.length > 1);
}

function extractSvgBlocks(content) {
  const blocks = [];
  const regex = /<svg[\s\S]*?<\/svg>/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    blocks.push(match[0]);
  }
  return blocks;
}

function countPaths(content) {
  return (content.match(/<path/g) || []).length;
}

function inferUsage(category) {
  const usageMap = {
    "arrows-direction":
      "navigation, pagination, steppers, import/export, fullscreen",
    "astronomy-astrology": "space, science, launch screens, horoscopes",
    "brands-logos": "logos, integrations, payment methods, social links",
    "business-analytics": "charts, reports, dashboards, kpis, analytics",
    "calls-telephony": "dialer, voip, support, contact, call history",
    "coding-architecture": "code, servers, databases, devops, terminals",
    "communication-messaging": "chat, inbox, email, comments, support",
    "connectivity-network": "wifi, bluetooth, battery, power, cloud sync",
    "crypto-web3": "tokens, exchanges, wallets, on-chain payments",
    "design-layout": "editors, canvas, layers, colour, alignment, grids",
    "education-office": "courses, library, certificates, office work",
    "files-documents": "documents, attachments, clipboard, archive, editing",
    "finance-banking": "payments, wallet, invoices, pricing, banking",
    "folders-storage": "file manager, storage, organisation, directories",
    "food-drinks": "menus, recipes, delivery, cafe, restaurant",
    "general-objects": "props, objects and everything with no other sheet",
    "hardware-devices": "hardware, gadgets, specs, device settings",
    "health-fitness": "health, clinics, pharmacy, gym, activity tracking",
    "home-furniture": "interiors, smart home, real estate, city",
    "lists-tasks": "checklists, playlists, task boards, ordering",
    "location-maps": "maps, places, gps, routes, delivery tracking",
    "media-playback": "player, gallery, camera, music, volume",
    notifications: "alerts, reminders, announcements, badges",
    "reactions-emojis": "reactions, ratings, favourites, awards, stickers",
    search: "search bars, filters, zoom, discovery",
    "security-biometrics": "auth, passwords, permissions, privacy, scanning",
    "shopping-ecommerce": "cart, checkout, storefront, orders",
    "system-ui": "buttons, forms, toolbars, menus, states",
    "time-calendar": "calendar, scheduling, alarms, timers, history",
    "transport-automotive": "logistics, fleet, garage, fuel, rides",
    "typography-text": "editors, typography, links, translation",
    "users-profiles": "profile, account, teams, members, contacts",
    "weather-environment": "forecast, conditions, temperature, climate",
  };
  return usageMap[category] || "general ui";
}

async function generateMetadata() {
  const files = fs
    .readdirSync(ICONS_DIR)
    .filter((f) => f.endsWith(".tsx"))
    .sort();

  console.log(`Generating metadata for ${files.length} icons...`);

  /* Every name an icon has had, expired renames included: a search for the
     name someone remembers, or a migration, still lands on the right icon. */
  const batches = loadRenames();
  const resolve = resolver(batches);
  const formerly = new Map();
  for (const batch of batches) {
    for (const from of Object.keys(batch.renames)) {
      const to = resolve(from);
      formerly.set(to, [...(formerly.get(to) ?? []), from]);
    }
  }

  const icons = [];

  for (const file of files) {
    const name = file.replace(".tsx", "");
    const content = fs.readFileSync(path.join(ICONS_DIR, file), "utf-8");

    const displayName = name.replace(/([A-Z])/g, " $1").trim();

    const svgBlocks = extractSvgBlocks(content);
    const allSvgContent = svgBlocks.join("\n");

    const category = extractCategory(name);
    const keywords = extractKeywords(name);
    const pathCount = countPaths(allSvgContent);

    /*
     * Every style of every icon is free. Bulk used to be sold on all but 282
     * icons; it is not any more, and Pro is now planned as animated icons,
     * new artwork rather than a branch withheld from these drawings.
     *
     * The per-icon shape stays. Consumers read freeStyles/proStyles rather
     * than assuming, so if something is ever sold again it is a change here
     * and nowhere else. proStyles being empty is what makes the website's
     * screened cells and the CLI's fallback notice go quiet on their own.
     */
    const styles = {
      outline: "free",
      twotone: "free",
      bold: "free",
      bulk: "free",
    };
    if (content.includes('variant === "Broken"')) styles.broken = "free";

    const freeStyles = Object.entries(styles)
      .filter(([_, v]) => v === "free")
      .map(([k]) => k);
    const proStyles = Object.entries(styles)
      .filter(([_, v]) => v === "pro")
      .map(([k]) => k);

    icons.push({
      name,
      displayName,
      category,
      categoryLabel: CATEGORY_LABELS[category],
      keywords,
      pathCount,
      styles,
      freeStyles,
      proStyles,
      usage: inferUsage(category),
      formerly: formerly.get(name) ?? [],
    });
  }

  const output = {
    version: 1,
    generatedAt: new Date().toISOString(),
    totalIcons: icons.length,
    categories: Object.entries(CATEGORY_LABELS).map(([slug, label]) => ({
      slug,
      label,
    })),
    icons,
  };

  fs.writeFileSync(
    path.join(SRC_DIR, "metadata.json"),
    JSON.stringify(output, null, 2),
  );
  console.log(`Generated metadata.json with ${icons.length} icons`);

  // Print category distribution
  const catCounts = {};
  for (const icon of icons) {
    catCounts[icon.category] = (catCounts[icon.category] || 0) + 1;
  }
  console.log("\nCategory distribution:");
  for (const [cat, count] of Object.entries(catCounts).sort(
    (a, b) => b[1] - a[1],
  )) {
    console.log(`  ${cat}: ${count}`);
  }
}

generateMetadata().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
