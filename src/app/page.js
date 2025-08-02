"use client";
import { NavControlProvider } from "@/context/nav-control-context";
import SectionContainer from "@/components/section-container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import styles from "@/styles/home.module.css";

export default function App() {
  return (
    <NavControlProvider>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <Hero />
          <SectionContainer />
          <Contact />
        </div>
      </main>
      <Footer />
    </NavControlProvider>
  );
}
