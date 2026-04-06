import Link from "next/link";

/** Navigation links shown in the site header. */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Resume", href: "/resume" },
] as const;

/** Featured project cards displayed on the home page. */
const PROJECTS = [
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS, deployed on Vercel with Web Analytics.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
] as const;

/** Home page – personal portfolio landing page. */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header / Nav */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">Vanessa</span>
          <nav className="flex gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={href === "/" ? "page" : undefined}
                className={
                  href === "/"
                    ? "text-indigo-600 font-medium"
                    : "text-gray-600 hover:text-indigo-600 font-medium transition-colors"
                }
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Hero */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I&apos;m Vanessa 👋
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A developer building modern web applications with a passion for
            clean code and great user experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/resume"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              View Resume
            </Link>
            <a
              href="https://github.com/vanessa3100"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>

        {/* About */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I&apos;m a developer passionate about building things for the web.
            I enjoy working across the full stack and am always looking for
            opportunities to learn new technologies and solve interesting
            problems. This site is my corner of the internet — feel free to
            explore!
          </p>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="grid gap-6">
            {PROJECTS.map(({ title, description, tags }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-50 text-indigo-700 text-sm px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
          <a
            href="https://github.com/vanessa3100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 font-medium underline"
          >
            Reach out on GitHub →
          </a>
        </section>
      </main>

      <footer className="text-center py-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Vanessa. Built with Next.js &amp; Tailwind
        CSS.
      </footer>
    </div>
  );
}
