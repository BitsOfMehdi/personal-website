"use client";
import { motion } from "framer-motion";
import classes from "@/components/section-container.module.css";

export default function SectionContainer({ children, isAbout, isWork }) {
  console.log("rendered", isAbout, isWork);
  return (
    <>
      {(isAbout || isWork) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <section className={classes.layout}>{children}</section>
        </motion.div>
      )}
    </>
  );
}
