/*
 * Guards what meaning search ranks from: metadata.json keywords and the
 * vectors in embeddings.json.
 *
 * Both failed quietly before. Keywords once carried what each SVG was built
 * from, so "path" sat on every icon and "curved" on nearly all, every vector
 * drifted to the same point, and "cog" found crypto logos. Nothing threw; the
 * results were just worse. These queries are ones that broke then, ranked by
 * plain cosine: the website and CLI add their own nudges on top, so this checks
 * the data rather than either consumer.
 *
 *   node scripts/search-check.mjs        (after a build)
 */
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DIST = fileURLToPath(new URL("../dist", import.meta.url));

if (!existsSync(path.join(DIST, "embeddings.json"))) {
  console.log("--  dist not built, skipping. Run `pnpm build`.");
  process.exit(0);
}

const { icons } = JSON.parse(readFileSync(path.join(DIST, "metadata.json"), "utf8"));
const vectors = JSON.parse(readFileSync(path.join(DIST, "embeddings.json"), "utf8"));

/* A keyword on a tenth of the set describes nothing. The busiest real one,
   "square", is on 8.7%; the drawing words were on 80-100%. */
const counts = new Map();
for (const icon of icons) {
  for (const k of new Set(icon.keywords)) counts.set(k, (counts.get(k) ?? 0) + 1);
}
for (const [k, n] of counts) {
  assert.ok(n <= icons.length / 10, `"${k}" is a keyword on ${n} of ${icons.length} icons`);
}
console.log(`ok  no keyword on more than a tenth of ${icons.length} icons`);

/* Query, then the names that count as right. One of them must be in the top 5. */
const CASES = [
  /* Not "cog": the model barely knows the word (no icon scores 0.3 for it),
     so it is carried by the website's and CLI's keyword nudge, not by these
     vectors. "gear" tests the same Setting data with a real margin. */
  ["gear", /^Setting/],
  ["dark mode", /Moon/],
  ["idea", /Lightbulb/],
  ["sign out", /Logout/],
  ["log in", /Login/],
  /* The delete keys (⌫ ⌦) are honest answers too; DeleteForward pushed Trash
     from 5th to 6th on plain cosine. */
  ["delete", /Trash|DeleteForward|Backspace/],
  ["home", /^Home/],
  ["thumbs up", /^Like/],
  ["attachment", /Paperclip|Attach/],
  ["fingerprint", /Finger/],
  ["search", /Search|Magnifier/],
  ["shopping cart", /Cart/],
  ["notification bell", /Bell|Notification/],
  ["earbuds", /Airbuds|Airpod/],
  ["gearbox", /Transmission/],
];

const { pipeline } = await import("@xenova/transformers");
// The model generate-embeddings.mjs used; any other scores in the wrong space.
const extract = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
  quantized: true,
});

for (const [query, right] of CASES) {
  const q = Array.from((await extract(query, { pooling: "mean", normalize: true })).data);
  const top = icons
    .map(({ name }) => {
      let dot = 0;
      for (let i = 0; i < q.length; i++) dot += q[i] * vectors[name][i];
      return { name, score: dot };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((h) => h.name);
  assert.ok(
    top.some((name) => right.test(name)),
    `"${query}" ranked ${top.join(", ")}`,
  );
}
console.log(`ok  ${CASES.length} queries find their icon in the top 5`);
