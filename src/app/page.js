import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "@/styles/home.module.css";

export default function App() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />

      <section id="about" className={styles.aboutSection}>
        <h2>About Me</h2>
        <p>
          Experienced Full Stack Web Developer with a strong track record of
          building responsive, scalable, and maintainable applications across
          the frontend and backend. Proficient in JavaScript, and skilled in
          React.js, Next.js, Vue.js, and TypeScript for crafting intuitive UIs,
          and in Node.js with Express for developing robust APIs.
        </p>
      </section>

      <section id="work" className={styles.workSection}>
        <h2>Work Experience</h2>
        <div className={styles.workList}>
          <div className={styles.jobItem}>
            <h3>Frontend Web Developer - Radio Free Asia</h3>
            <p className={styles.jobMeta}>
              Aug 2023 - May 2025, Washington, D.C.
            </p>
            <ul>
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
          <div className={styles.jobItem}>
            <h3>Full Stack Web Developer - Geico Insurance</h3>
            <p className={styles.jobMeta}>
              May 2020 - June 2023, Chevy Chase, MD
            </p>
            <ul>
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
          <div className={styles.jobItem}>
            <h3>Frontend Web Developer - First Citizens Bank</h3>
            <p className={styles.jobMeta}>Mar 2018 - Apr 2020, Fairfax, VA</p>
            <ul>
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

      <section id="contact" className={styles.contactSection}>
        <h2>Contact</h2>
        <p>Email: mehdi@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>

      <section id="blog" className={styles.blogSection}>
        <h2>Blog (Coming Soon)</h2>
        <p>This section will feature articles and tutorials in the future.</p>
      </section>
    </main>
  );
}
