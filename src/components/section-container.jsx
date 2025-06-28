"use client";
import { motion } from "framer-motion";

import About from "@/components/about";
import Work from "@/components/work";

import classes from "@/components/section-container.module.css";

export default function SectionContainer({ children, navState }) {
  const { isWork, isAbout } = navState;
  console.log("rendered from sections", isAbout, isWork);
  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 590 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          transformOrigin: "right",
        }}
      >
        <section className={classes.layout}>
          {isAbout && <About />}
          {isWork && <Work />}
          <About />
        </section>
      </motion.div>
    </>
  );
}
