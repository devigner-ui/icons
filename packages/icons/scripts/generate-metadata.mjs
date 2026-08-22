import fs from "fs";
import path from "path";

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

const SHAPE_SYNONYMS = {
  circle: ["round", "circular", "ring", "dot", "cycle", "orb", "loop"],
  square: ["box", "block", "rectangle", "quad", "tile", "grid", "frame"],
  line: ["stroke", "rule", "bar", "stripe", "dash", "border", "edge"],
  arrow: ["chevron", "direction", "pointer", "caret", "triangle"],
  path: ["curve", "trail", "trace", "route", "track", "stroke"],
  cross: ["x", "close", "cancel", "remove", "delete", "multiply"],
  check: ["tick", "yes", "confirm", "done", "complete", "verified"],
  heart: ["love", "favorite", "like", "care"],
  star: ["favorite", "rating", "review", "sparkle", "shine"],
  lock: ["secure", "lock", "privacy", "safety", "protected"],
  mail: ["email", "message", "envelope", "letter", "inbox"],
  phone: ["call", "telephone", "contact", "mobile", "smartphone"],
  search: ["find", "magnifier", "explore", "lookup", "scan"],
  home: ["house", "building", "residence", "dashboard"],
  user: ["person", "profile", "account", "avatar", "member"],
  settings: ["gear", "preferences", "configuration", "options", "control"],
  bell: ["notification", "alert", "alarm", "ring", "reminder"],
  calendar: ["date", "event", "schedule", "time", "day"],
  camera: ["photo", "image", "picture", "video", "record"],
  download: ["save", "import", "receive", "install", "arrow down"],
  upload: ["export", "send", "share", "publish", "arrow up"],
  trash: ["delete", "bin", "remove", "discard", "garbage"],
  edit: ["pencil", "write", "modify", "change", "update", "pen"],
  add: ["plus", "new", "create", "include", "append", "increase"],
  minus: ["subtract", "remove", "delete", "decrease", "reduce"],
  play: ["start", "run", "begin", "video", "music", "media"],
  pause: ["stop", "break", "wait", "hold", "freeze"],
  music: ["audio", "sound", "tune", "song", "melody", "note"],
  document: ["file", "paper", "text", "page", "doc", "report"],
  folder: ["directory", "file", "storage", "organize", "collection"],
  alert: ["warning", "danger", "caution", "attention", "error"],
  info: ["information", "help", "support", "detail", "about"],
  question: ["help", "faq", "support", "inquiry", "unknown"],
};

function extractCategory(name) {
  const category = ICON_CATEGORIES[name];
  if (!category) {
    throw new Error(
      `${name} has no category. Add it to scripts/icon-categories.json.`,
    );
  }
  return category;
}

function extractKeywords(name, svgContent) {
  const words = name
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const keywords = new Set(words);

  // Extract SVG elements
  const elementRegex = /<(\w+)([^>]*)>/gs;
  let match;
  const elements = [];
  while ((match = elementRegex.exec(svgContent)) !== null) {
    const tag = match[1].toLowerCase();
    if (
      [
        "path",
        "circle",
        "rect",
        "line",
        "polyline",
        "polygon",
        "ellipse",
      ].includes(tag)
    ) {
      elements.push(tag);
    }
  }

  const elementCounts = {};
  elements.forEach((el) => {
    elementCounts[el] = (elementCounts[el] || 0) + 1;
  });

  if (elementCounts.circle) {
    keywords.add("circle");
    keywords.add("round");
    if (elementCounts.circle >= 2) keywords.add("multiple circles");
  }
  if (elementCounts.rect) {
    keywords.add("rectangle");
    keywords.add("square");
  }
  if (elementCounts.line) keywords.add("line");
  if (elementCounts.path) keywords.add("path");

  // Path commands
  const dRegex = /d="([^"]*)"/g;
  const commands = new Set();
  while ((match = dRegex.exec(svgContent)) !== null) {
    const cmdMatch = match[1].match(/[MLHVCSQTAZ]/gi);
    if (cmdMatch) cmdMatch.forEach((c) => commands.add(c.toUpperCase()));
  }

  if (commands.has("C") || commands.has("S")) {
    keywords.add("curved");
    keywords.add("smooth");
  }
  if (commands.has("A")) {
    keywords.add("arc");
    keywords.add("curve");
  }
  if (commands.has("Z") || commands.has("z")) {
    keywords.add("closed");
  }

  // Shape synonyms
  for (const [word, synonyms] of Object.entries(SHAPE_SYNONYMS)) {
    if (words.includes(word)) synonyms.forEach((s) => keywords.add(s));
    for (const s of synonyms) {
      if (words.includes(s)) keywords.add(word);
    }
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

  const icons = [];

  for (const file of files) {
    const name = file.replace(".tsx", "");
    const content = fs.readFileSync(path.join(ICONS_DIR, file), "utf-8");

    const displayName = name.replace(/([A-Z])/g, " $1").trim();

    const svgBlocks = extractSvgBlocks(content);
    const allSvgContent = svgBlocks.join("\n");

    const category = extractCategory(name);
    const keywords = extractKeywords(name, allSvgContent);
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
