export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-lg mb-4">
          This is a Next.js starter template with TypeScript and Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            About
          </a>
          <a
            href="/projects"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Projects
          </a>
        </div>
      </div>
    </main>
  );
}
