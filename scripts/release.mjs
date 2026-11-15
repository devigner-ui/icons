/*
 * pnpm release: build everything, test everything, then publish what changed.
 *
 * Every package has `prepublishOnly: pnpm build && pnpm test`, so a lone
 * `npm publish` never ships a stale dist. During a release that is harmful:
 * `changeset publish` uploads the packages in parallel, each one rebuilds
 * itself first, and a package whose tests read another package's dist
 * (Angular reads icons-js, Nuxt reads icons-vue, MCP reads icons) can find it
 * half deleted mid-rebuild. 3.6.0 failed that way.
 *
 * So the release builds and tests once, in dependency order (`pnpm -r` is
 * topological), then publishes with lifecycle scripts off. Nothing is lost:
 * prepublishOnly is the only lifecycle script any package has, and it would
 * only repeat what just ran.
 *
 *   pnpm release
 */
import { spawnSync } from "node:child_process";

function run(command, env = {}) {
  console.log(`\n> ${command}`);
  const { status } = spawnSync(command, {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, ...env },
  });
  if (status !== 0) process.exit(status ?? 1);
}

run("pnpm build");
run("pnpm test");
run("pnpm changeset publish", { npm_config_ignore_scripts: "true" });
