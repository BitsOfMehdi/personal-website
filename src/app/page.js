export default function App() {
  return (
    <main className="bg-background text-dark font-sans">
      <header className="sticky top-0 z-50 bg-background shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Mehdi Mousavi</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li>
              <a href="#about" className="hover:text-accent">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-accent">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-accent">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="min-h-screen flex items-center justify-center text-center p-10">
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm Mehdi Mousavi</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto">
            Full Stack Web Developer specialized in JavaScript, React, and
            building scalable, user-focused applications.
          </p>
        </div>
      </section>

      <section id="about" className="bg-primary p-10 text-white">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="max-w-3xl">
          Experienced Full Stack Web Developer with a strong track record of
          building responsive, scalable, and maintainable applications across
          the frontend and backend. Proficient in JavaScript, and skilled in
          React.js, Next.js, Vue.js, and TypeScript for crafting intuitive UIs,
          and in Node.js with Express for developing robust APIs.
        </p>
      </section>

      <section id="work" className="p-10">
        <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-bold">
              Frontend Web Developer - Radio Free Asia
            </h3>
            <p className="text-sm text-gray-700">
              Aug 2023 - May 2025, Washington, D.C.
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>
                Led migration of 17 websites to React/Next.js improving
                performance and editorial control.
              </li>
              <li>Built 40+ reusable React components in ArcXP CMS.</li>
              <li>
                Implemented forms with AWS Lambda integration, pagination logic,
                and custom asset delivery via S3.
              </li>
              <li>
                Worked on RESTful and GraphQL API integration and participated
                in CI/CD pipeline.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-bold">
              Full Stack Web Developer - Geico Insurance
            </h3>
            <p className="text-sm text-gray-700">
              May 2020 - June 2023, Chevy Chase, MD
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>
                Built shared Redux state layers, optimized forms, and integrated
                GraphQL APIs.
              </li>
              <li>
                Collaborated cross-functionally and improved frontend
                SEO/accessibility.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-accent pl-4">
            <h3 className="text-xl font-bold">
              Frontend Web Developer - First Citizens Bank
            </h3>
            <p className="text-sm text-gray-700">
              Mar 2018 - Apr 2020, Fairfax, VA
            </p>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>
                Developed websites using JavaScript stack, optimized for SEO and
                accessibility.
              </li>
              <li>
                Collaborated with backend devs and participated in Agile
                processes.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-primary text-white p-10">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p>Email: mehdi@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <section id="blog" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-2">Blog (Coming Soon)</h2>
        <p className="text-sm text-gray-600">
          This section will feature articles and tutorials in the future.
        </p>
      </section>
    </main>
  );
}
