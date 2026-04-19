"use client";
import { Mail, Github, Linkedin } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { useNavControl } from "@/context/nav-control-context";
import styles from "./Contact.module.css";
import ModalCloseButton from "../ui/ModalCloseButton";
import { useEffect } from "react";

export default function Contact() {
  const { navState, navDispatch } = useNavControl();

  useEffect(() => {
    if (navState.curSection === "contact") {
      navDispatch({ type: "openModal" });
    }
  }, [navState.curSection, navDispatch]);

  return (
    <Modal direction="top">
      <div className={styles.contact}>
        <ModalCloseButton />
        <h2 className={styles.title}>Let’s Connect</h2>
        <div className={styles.iconRow}>
          <a
            className={styles.icons}
            href="mailto:bitsofmehdi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={48} />
          </a>
          <a
            className={styles.icons}
            href="https://github.com/BitsOfMehdi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={48} />
          </a>
          <a
            className={styles.icons}
            href="https://www.linkedin.com/in/mehdi-mousavi-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={48} />
          </a>
        </div>
      </div>
    </Modal>
  );
}
