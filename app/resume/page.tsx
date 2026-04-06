import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume – Vanessa",
  description: "Vanessa's resume: skills, experience, and education.",
};

/** Skills grouped by category. */
const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Vercel", "Node.js"],
  },
] as const;

/** Work experience entries. */
const EXPERIENCE: {
  title: string;
  company: string;
  period: string;
  bullets: readonly string[];
}[] = [];

/** Education entries. */
const EDUCATION: {
  degree: string;
  institution: string;
  period: string;
}[] = [];

/** Resume page – skills, experience, and education. */
export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header / Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Vanessa
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/"
              className="text-gray-600 hover:text-indigo-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/resume"
              className="text-indigo-600 font-medium"
              aria-current="page"
            >
              Resume
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Page title */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume</h1>
          <p className="text-gray-500">Vanessa</p>
        </div>

        {/* Skills */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SKILLS.map(({ category, items }) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
                  {category}
                </h3>
                <ul className="space-y-1">
                  {items.map((skill) => (
                    <li key={skill} className="text-gray-700">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Experience
          </h2>
          {EXPERIENCE.length > 0 ? (
            <div className="space-y-8">
              {EXPERIENCE.map(({ title, company, period, bullets }, idx) => (
                <div key={`${title}-${company}-${period}-${idx}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {title}
                      </h3>
                      <p className="text-indigo-600 font-medium">{company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                      {period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">
              Experience details coming soon.
            </p>
          )}
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Education
          </h2>
          {EDUCATION.length > 0 ? (
            <div className="space-y-6">
              {EDUCATION.map(({ degree, institution, period }, idx) => (
                <div
                  key={`${degree}-${institution}-${period}-${idx}`}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {degree}
                    </h3>
                    <p className="text-indigo-600 font-medium">{institution}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-1 sm:mt-0">
                    {period}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">
              Education details coming soon.
            </p>
          )}
        </section>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Vanessa. Built with Next.js &amp; Tailwind
        CSS.
      </footer>
    </div>
  );
}
