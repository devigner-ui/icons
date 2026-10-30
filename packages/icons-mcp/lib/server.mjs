/*
 * An MCP server over stdio, so an AI coding tool can find an icon by what it
 * means and write the code that draws it.
 *
 * It does no searching of its own. Every lookup runs the @devigner-ui/icons
 * CLI with --json, so the ranking, the old-name lookups and the SVG output
 * are the ones `npx @devigner-ui/icons` gives, and cannot drift from them.
 * Search is semantic when @xenova/transformers is installed beside it and
 * falls back to keywords when it is not, exactly as the CLI does.
 *
 * bin/server.mjs connects this to stdio; scripts/check.mjs drives it in
 * memory.
 */
import { execFile } from "node:child_process";
import { createRequire } from "node:module";
import path from "node:path";
import { promisify } from "node:util";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const require = createRequire(import.meta.url);
const CLI = path.join(path.dirname(require.resolve("@devigner-ui/icons/package.json")), "bin", "cli.mjs");
const { version } = require("../package.json");

const STYLES = ["outline", "twotone", "bold", "bulk", "broken"];
const FRAMEWORKS = ["react", "vue", "svelte", "solid", "angular", "react-native", "js", "svg"];

/** Runs the CLI and returns stdout, or throws with what it printed to stderr. */
export async function cli(...args) {
  try {
    const { stdout } = await promisify(execFile)(process.execPath, [CLI, ...args], {
      maxBuffer: 16 * 1024 * 1024,
    });
    return stdout;
  } catch (error) {
    throw new Error(String(error.stderr || error.message).trim());
  }
}

/* The React package spells its styles in PascalCase; every other one in lowercase. */
const REACT_STYLE = { outline: "Outline", twotone: "TwoTone", bold: "Bold", bulk: "Bulk", broken: "Broken" };

/** How to draw one icon in one framework: the import and the element. */
export function snippet(name, framework, style) {
  const C = `Icon${name}`;
  const v = style === "outline" ? "" : ` variant="${style}"`;
  switch (framework) {
    case "react":
      return `import { ${C} } from "@devigner-ui/icons/${name}";\n\n<${C}${style === "outline" ? "" : ` variant="${REACT_STYLE[style]}"`} className="size-6" />`;
    case "react-native":
      return `import { ${C} } from "@devigner-ui/icons-react-native";\n\n<${C}${v} size={24} color="#16161a" />`;
    case "vue":
      return `<script setup>\nimport { ${C} } from "@devigner-ui/icons-vue";\n</script>\n\n<${C}${v} class="size-6" />`;
    case "svelte":
      return `<script>\n  import { ${C} } from "@devigner-ui/icons-svelte";\n</script>\n\n<${C}${v} class="size-6" />`;
    case "solid":
      return `import { ${C} } from "@devigner-ui/icons-solid";\n\n<${C}${v} class="size-6" />`;
    case "angular":
      return `import { DvIcon, ${C} } from "@devigner-ui/icons-angular";\n\n// imports: [DvIcon], and in the class: ${C} = ${C};\n<svg [dvIcon]="${C}"${v} class="size-6"></svg>`;
    case "js":
      return `import { toSvg, ${C} } from "@devigner-ui/icons-js";\n\nel.innerHTML = toSvg(${C}${style === "outline" ? "" : `, { variant: "${style}" }`});`;
  }
}

const text = (value) => ({
  content: [{ type: "text", text: typeof value === "string" ? value : JSON.stringify(value, null, 2) }],
});

/* What a search result carries: enough to choose, not the whole record. */
const brief = (icon) => ({
  name: icon.name,
  category: icon.category,
  keywords: icon.keywords,
  usage: icon.usage,
  ...(icon.formerly?.length ? { formerly: icon.formerly } : {}),
});

export function createServer() {
  const server = new McpServer({ name: "devigner-icons", version });

  server.registerTool(
    "search_icons",
    {
      title: "Search icons",
      description:
        "Find Devigner icons by meaning, such as 'add to cart' or 'settings cog'. " +
        "Returns names ranked best first. Old names from before 3.5.0 are matched too.",
      inputSchema: {
        query: z.string().min(1).describe("What the icon should show or mean"),
        limit: z.number().int().min(1).max(50).optional().describe("How many results, default 10"),
        category: z.string().optional().describe("Restrict to one category slug, from list_categories"),
      },
    },
    async ({ query, limit = 10, category }) => {
      const args = ["search", query, "--json", `--limit=${limit}`];
      if (category) args.push(`--category=${category}`);
      return text(JSON.parse(await cli(...args)).map(brief));
    },
  );

  server.registerTool(
    "get_icon",
    {
      title: "Get an icon",
      description:
        "The code to draw one icon: an import and an element for a framework, or the raw SVG. " +
        "An old name is resolved to the current one.",
      inputSchema: {
        name: z.string().min(1).describe("Icon name, as search_icons returns it, e.g. BagStraps"),
        framework: z.enum(FRAMEWORKS).optional().describe("Default react. 'svg' returns the markup itself"),
        style: z.enum(STYLES).optional().describe("Default outline"),
      },
    },
    async ({ name, framework = "react", style = "outline" }) => {
      const icon = JSON.parse(await cli("info", name, "--json"));
      const code =
        framework === "svg"
          ? (await cli("copy", icon.name, "--format=svg", `--style=${style}`)).trim()
          : snippet(icon.name, framework, style);
      const note = icon.name === name ? "" : `${name} was renamed to ${icon.name}.\n\n`;
      return text(`${note}${code}`);
    },
  );

  server.registerTool(
    "list_categories",
    {
      title: "List categories",
      description: "Every icon category slug with how many icons it holds, for narrowing search_icons.",
      inputSchema: {},
    },
    async () => text(JSON.parse(await cli("categories", "--json"))),
  );

  return server;
}

