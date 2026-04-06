export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="text-center p-8">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to Vanessa
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A Next.js application with Vercel Web Analytics
        </p>
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Features
          </h2>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✅ Next.js 15 with App Router</li>
            <li>✅ TypeScript</li>
            <li>✅ Tailwind CSS</li>
            <li>✅ Vercel Web Analytics</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
