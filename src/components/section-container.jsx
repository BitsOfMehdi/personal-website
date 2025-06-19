"use client";
import classes from "@/components/section-container.module.css";

export default function SectionContainer(props) {
  return (
    <section id={props.id} className={classes.layout}>
      {props.children}
    </section>
  );
}
