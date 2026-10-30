/*
 * Runs the Blazor checks (test/Check) when the .NET SDK is installed, and
 * says so when it is not, so `pnpm test` stays green on a machine set up only
 * for JavaScript.
 *
 *   node scripts/check.mjs        (after a build)
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";

if (!existsSync(new URL("../src/Devigner.Icons.Blazor/DvIcons.g.cs", import.meta.url))) {
  console.log("--  DvIcons.g.cs not built, skipping. Run `pnpm build`.");
  process.exit(0);
}
if (spawnSync("dotnet", ["--version"], { shell: true }).status !== 0) {
  console.log("--  .NET SDK not installed, skipping the Blazor checks");
  process.exit(0);
}
const run = spawnSync("dotnet", ["run", "--project", "test/Check", "-v", "q", "--nologo"], {
  cwd: new URL("../", import.meta.url),
  stdio: "inherit",
  shell: true,
});
process.exit(run.status ?? 1);
