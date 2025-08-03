import { Mail, Github, Linkedin } from "lucide-react";
import Modal from "../utility/Modal";
import { useNavControl } from "@/context/nav-control-context";
import styles from "./Contact.module.css";

function Contact({}) {
  const { navState, navDispatch } = useNavControl();
  const isOpen = navState.currentPage === "contact";

  return (
    <Modal
      isOpen={isOpen}
      modalClassName={styles.modal}
      overlayClassName={styles.overlay}
      onClose={() => navDispatch({ type: "home" })}
    >
      <h2 className={styles.centeredTitle}>Let’s Connect</h2>
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
    </Modal>
  );
}

export default Contact;
