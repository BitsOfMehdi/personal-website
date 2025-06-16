export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
            Hey, I'm Mehdi Mousavi
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Frontend Engineer — crafting fast, modern websites with React,
            Next.js & Tailwind CSS.
          </p>
          <div className="mt-6">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-xl transition"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
