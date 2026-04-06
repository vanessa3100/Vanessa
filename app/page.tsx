/** Links to external documentation resources. */
const DOCS_LINKS = [
  { label: "Next.js Docs", href: "https://nextjs.org/docs" },
  { label: "Tailwind CSS Docs", href: "https://tailwindcss.com/docs" },
  {
    label: "Vercel Analytics Docs",
    href: "https://vercel.com/docs/analytics",
  },
] as const;

/** Home page – provides a brief overview of the project and links to docs. */
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center p-8 max-w-2xl w-full">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Vanessa
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A Next.js 15 application with TypeScript, Tailwind CSS, and Vercel
          Web Analytics.
        </p>

        {/* Tech stack */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Tech Stack
          </h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>
              <span className="font-medium">Next.js 15</span> – React framework
              with App Router
            </li>
            <li>
              <span className="font-medium">TypeScript</span> – Type-safe
              JavaScript
            </li>
            <li>
              <span className="font-medium">Tailwind CSS</span> –
              Utility-first CSS framework
            </li>
            <li>
              <span className="font-medium">Vercel Web Analytics</span> –
              Traffic and usage insights
            </li>
          </ul>
        </div>

        {/* Getting started */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Getting Started
          </h2>
          <ol className="space-y-2 text-gray-700 list-decimal list-inside">
            <li>
              Clone the repository and run{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                npm install
              </code>
            </li>
            <li>
              Start the dev server with{" "}
              <code className="bg-gray-100 px-1 rounded text-sm">
                npm run dev
              </code>
            </li>
            <li>
              Open{" "}
              <a
                href="http://localhost:3000"
                className="text-indigo-600 underline"
              >
                http://localhost:3000
              </a>{" "}
              in your browser
            </li>
          </ol>
        </div>

        {/* Documentation links */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Documentation
          </h2>
          <ul className="space-y-2">
            {DOCS_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
