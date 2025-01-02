import Link from "next/link";

/**
 * Home page component that displays cards linking to different routes
 * Each card represents a different implementation approach for the application
 * @returns JSX.Element representing the home page
 */
export default function Home() {
  const routes = [
    {
      title: "Vercel AI",
      href: "/vercel-ai",
      description:
        "Implementation using Vercel AI SDK for structured streaming output.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Vercel AI Streamed",
      href: "/vercel-ai-streamed",
      description: "Streamed implementation variant using Vercel AI SDK.",
      gradient: "from-blue-500 to-teal-500",
    },
    {
      title: "Streaming",
      href: "/streaming",
      description: "Custom streaming implementation for structured output.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Synchronous",
      href: "/synchronous",
      description: "Traditional synchronous implementation approach.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen p-8 md:p-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Structured Output Implementations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} className="group block">
              <div className="h-full p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-lg dark:border-gray-800 dark:hover:border-gray-700">
                <div
                  className={`h-2 w-20 rounded mb-4 bg-gradient-to-r ${route.gradient}`}
                />
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-gray-900 dark:group-hover:text-white">
                  {route.title}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {route.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
