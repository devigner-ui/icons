/*
 * The warning an old icon name gives after a rename. scripts/build.mjs writes
 * one wrapper per entry in @devigner-ui/icons' scripts/renames.json; each
 * renders the renamed icon and calls this once.
 *
 * Silent in production: bundlers replace process.env.NODE_ENV with a literal
 * and the warning drops out. Where nothing replaces it, `process` does not
 * exist and the catch keeps the icon rendering instead of throwing.
 */
const warned = new Set();

export function warnRenamed(from, message) {
  let development = false;
  try {
    development = process.env.NODE_ENV !== "production";
  } catch {}
  if (development && !warned.has(from)) {
    warned.add(from);
    console.warn(`[@devigner-ui/icons-svelte] ${message}`);
  }
}
