#!/usr/bin/env node
/*
 * The MCP server on stdio. Add it to a client's config as
 * `npx -y @devigner-ui/icons-mcp`.
 */
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "../lib/server.mjs";

await createServer().connect(new StdioServerTransport());
