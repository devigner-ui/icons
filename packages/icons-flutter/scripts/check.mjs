/*
 * Runs `flutter test` when Flutter is installed, and says so when it is not,
 * so `pnpm test` stays green on a machine set up only for JavaScript.
 *
 *   node scripts/check.mjs        (after a build)
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

if (!existsSync(new URL("../lib/src/icons.g.dart", import.meta.url))) {
  console.log("--  icons.g.dart not built, skipping. Run `pnpm build`.");
  process.exit(0);
}
if (spawnSync("flutter", ["--version"], { shell: true }).status !== 0) {
  console.log("--  flutter not installed, skipping the Flutter tests");
  process.exit(0);
}
const run = spawnSync("flutter", ["test", "--reporter", "compact"], {
  cwd: new URL("../", import.meta.url),
  stdio: "inherit",
  shell: true,
});
process.exit(run.status ?? 1);
