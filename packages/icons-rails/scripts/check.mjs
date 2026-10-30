/*
 * Runs the gem's Ruby tests when Ruby is installed, and says so when it is
 * not, so `pnpm test` stays green on a machine set up only for JavaScript.
 *
 *   node scripts/check.mjs        (after a build)
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

if (!existsSync(new URL("../lib/devigner_icons/svg/outline", import.meta.url))) {
  console.log("--  svg not built, skipping. Run `pnpm build`.");
  process.exit(0);
}
if (spawnSync("ruby", ["--version"], { shell: true }).status !== 0) {
  console.log("--  ruby not installed, skipping the gem's tests");
  process.exit(0);
}
const run = spawnSync("ruby", ["-Ilib", "-Itest", "test/test_devigner_icons.rb"], {
  cwd: new URL("../", import.meta.url),
  stdio: "inherit",
  shell: true,
});
process.exit(run.status ?? 1);
