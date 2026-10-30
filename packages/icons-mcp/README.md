# @devigner-ui/icons-mcp

An [MCP](https://modelcontextprotocol.io) server for [Devigner Icons](https://icons.devigner.cc). It lets an AI coding tool find the right icon among 2,112 by what it means, then write the import and element for your framework.

## Set up

Add it to your client's MCP config:

```json
{
  "mcpServers": {
    "devigner-icons": { "command": "npx", "args": ["-y", "@devigner-ui/icons-mcp"] }
  }
}
```

## Tools

| Tool | What it does |
| --- | --- |
| `search_icons` | Ranks icons against a description, such as "add to cart". Old names from before 3.5.0 match too. |
| `get_icon` | The code for one icon in `react`, `vue`, `svelte`, `solid`, `angular`, `react-native` or `js`, or the raw `svg`, in any style. |
| `list_categories` | Every category with its icon count. |

Search runs the `@devigner-ui/icons` CLI, so it ranks exactly as `npx @devigner-ui/icons search` does. It ranks by meaning when `@xenova/transformers` is installed, and by keywords otherwise.

## Licence

MIT for the code, CC-BY-4.0 for the artwork. See ATTRIBUTION.md.
