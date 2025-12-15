import { NavControlProvider } from "@/context/nav-control-context";
import SectionContainer from "@/components/layout/SectionContainer";
import Header from "@/components/layout/Header";
import Shell from "@/components/layout/Shell";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import styles from "./page.module.css";

export default function App() {
  return (
    <NavControlProvider>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroContainer}>
          <Shell />
          <SectionContainer />
          <Contact />
        </div>
      </main>
      <Footer />
    </NavControlProvider>
  );
}
