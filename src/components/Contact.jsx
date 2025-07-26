import Modal from "./Modal";
import { useNavControl } from "@/context/nav-control-context";

function Contact({ onClose }) {
  const { navState } = useNavControl();
  const isOpen = navState.currentPage === "contact";

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Contact Me</h2>
      <h3>Email me at: example@example.com</h3>
      <h3>Follow me on GitHub: github.com/yourusername</h3>
      <h3>Connect on LinkedIn: linkedin.com/in/yourprofile</h3>
    </Modal>
  );
}

export default Contact;
