# mcp

A Vercel-deployable MCP server.
Two tools, zero config.

```bash
bun install && bun dev
```

`/api/mcp` — HTTP. `/api/sse` — SSE.

| tool | input |
|------|-------|
| `echo` | `{ message }` |
| `roll_dice` | `{ sides }` |

Add your own in `app/api/[transport]/route.ts`.

```json
{ "mcpServers": { "starter": { "url": "https://your-app.vercel.app/api/mcp" } } }
```

[![Deploy](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/quantm-work/mcp)

MIT.
