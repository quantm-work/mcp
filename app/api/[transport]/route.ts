import { createMcpHandler } from "mcp-handler";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "echo",
      "Echo a message back",
      { message: z.string() },
      async ({ message }) => ({
        content: [{ type: "text", text: message }],
      }),
    );

    server.tool(
      "roll_dice",
      "Roll an N-sided die",
      { sides: z.number().int().min(2).max(1000) },
      async ({ sides }) => ({
        content: [
          { type: "text", text: String(1 + Math.floor(Math.random() * sides)) },
        ],
      }),
    );
  },
  {},
  { basePath: "/api" },
);

export { handler as GET, handler as POST, handler as DELETE };
