"use client";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import About from "@/components/about";
import Work from "@/components/work";
import { useMediaQuery } from "@/utility/useMediaQuery";
import classes from "@/components/section-container.module.css";

export default function SectionContainer() {
  const { navState } = useNavControl();
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <motion.div
      initial={{ width: 0, height: 0, display: "none" }}
      animate={{ width: isMobile ? "100vw" : 1000, display: "block" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        transformOrigin: "right",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <section className={classes.layout}>
        {navState.currentPage === "work" && <Work />}
        {navState.currentPage === "about" && <About />}
      </section>
    </motion.div>
  );
}
