/*
 * Connects a real MCP client to the server in memory and calls each tool, so
 * what is checked is what an AI tool would get back.
 *
 *   node scripts/check.mjs
 */
import assert from "node:assert/strict";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { InMemoryTransport } from "@modelcontextprotocol/sdk/inMemory.js";
import { createServer, snippet } from "../lib/server.mjs";

let checked = 0;
async function check(what, fn) {
  await fn();
  checked++;
}

const [clientSide, serverSide] = InMemoryTransport.createLinkedPair();
await createServer().connect(serverSide);
const client = new Client({ name: "check", version: "0" });
await client.connect(clientSide);

const call = async (name, args = {}) => {
  const result = await client.callTool({ name, arguments: args });
  return result.content[0].text;
};

await check("the three tools are listed", async () => {
  const { tools } = await client.listTools();
  assert.deepEqual(tools.map((t) => t.name).sort(), ["get_icon", "list_categories", "search_icons"]);
});

await check("search ranks icons for a description", async () => {
  /* --keyword is not exposed; without the model installed the CLI falls back
     to keywords on its own, which is what runs here. */
  const hits = JSON.parse(await call("search_icons", { query: "shopping cart", limit: 3 }));
  assert.ok(hits.length > 0 && hits.length <= 3);
  assert.equal(hits[0].name, "ShoppingCart");
});

await check("get_icon writes a React snippet by default", async () => {
  const code = await call("get_icon", { name: "BagStraps", style: "bold" });
  assert.match(code, /import \{ IconBagStraps \} from "@devigner-ui\/icons\/BagStraps"/);
  assert.match(code, /variant="Bold"/);
});

await check("get_icon returns raw SVG and resolves old names", async () => {
  const code = await call("get_icon", { name: "Bag2", framework: "svg" });
  assert.match(code, /^Bag2 was renamed to BagStraps\./);
  assert.match(code, /<svg[^>]*viewBox="0 0 24 24"/);
});

await check("an unknown name is an error, not an empty answer", async () => {
  const result = await client.callTool({ name: "get_icon", arguments: { name: "Nope" } });
  assert.equal(result.isError, true);
  assert.match(result.content[0].text, /no icon named Nope/);
});

await check("categories come back with counts", async () => {
  const categories = JSON.parse(await call("list_categories"));
  assert.ok(categories["system-ui"] > 0);
});

await check("every framework has a snippet", () => {
  for (const f of ["react", "vue", "svelte", "solid", "angular", "react-native", "js"]) {
    assert.match(snippet("Add", f, "bulk"), /IconAdd/, f);
  }
});

await client.close();
console.log(`ok  ${checked} checks on the MCP server`);
