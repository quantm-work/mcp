const config = JSON.stringify(
  {
    mcpServers: {
      starter: { url: "https://your-app.vercel.app/api/mcp" },
    },
  },
  null,
  2,
);

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-6 py-16 font-mono">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">mcp</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Vercel-deployable MCP server starter.
        </p>
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm uppercase tracking-wider text-zinc-500">
          Endpoints
        </h2>
        <table className="text-sm">
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-800">
              <td className="py-2 pr-4 font-semibold">HTTP</td>
              <td className="py-2">/api/mcp</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-semibold">SSE</td>
              <td className="py-2">/api/sse</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm uppercase tracking-wider text-zinc-500">
          Tools
        </h2>
        <ul className="list-disc pl-5 text-sm">
          <li>
            <code>echo</code> &mdash; returns the input message
          </li>
          <li>
            <code>roll_dice</code> &mdash; rolls an N-sided die
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm uppercase tracking-wider text-zinc-500">
          Client config
        </h2>
        <pre className="overflow-x-auto rounded-md bg-zinc-100 p-4 text-xs dark:bg-zinc-900">
          {config}
        </pre>
      </section>
    </main>
  );
}
