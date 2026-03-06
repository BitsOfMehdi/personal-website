"use client";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import useMediaQuery from "@/hooks/useMediaQuery";
import styles from "@/components/layout/SectionContainer.module.css";

export default function SectionContainer() {
  const { navState } = useNavControl();
  const isMobile = useMediaQuery();

  return (
    <motion.div
      initial={{ width: 0, height: 0, display: "none" }}
      animate={{
        width: isMobile === "mobile" ? "100vw" : 1000,
        display: "block",
      }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        transformOrigin: "right",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <section className={styles.layout}>
        {navState.currentPage === "work" && <Work />}
        {navState.currentPage === "about" && <About />}
      </section>
    </motion.div>
  );
}
