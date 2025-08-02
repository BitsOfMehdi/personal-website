"use client";
import { motion } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import About from "@/components/about";
import Work from "@/components/work";

import classes from "@/components/section-container.module.css";

export default function SectionContainer() {
  const { navState } = useNavControl();
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 1000 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          transformOrigin: "right",
        }}
      >
        <section className={classes.layout}>
          {navState.currentPage === "work" && <Work />}
          {navState.currentPage === "about" && <About />}
        </section>
      </motion.div>
    </>
  );
}
