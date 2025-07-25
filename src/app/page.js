"use client";
import { NavControlProvider } from "@/context/nav-control-context";
import SectionContainer from "@/components/section-container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import styles from "@/styles/home.module.css";

export default function App() {
  return (
    <NavControlProvider>
      <main className={styles.main}>
        <Header />
        <div className={styles.heroContainer}>
          <Hero />
          <SectionContainer />
        </div>
        {/* <SectionContainer id="contact">
        <h2>Contact</h2>
        <p>Email: mehdi@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </SectionContainer>

      <SectionContainer id="blog">
        <h2>Blog (Coming Soon)</h2>
        <p>This section will feature articles and tutorials in the future.</p>
      </SectionContainer> */}
      </main>
    </NavControlProvider>
  );
}
