import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";

export default function Modal({
  isOpen,
  onClose,
  children,
  modalClassName,
  overlayClassName,
  direction = "top", // default direction
}) {
  const { navState, navDispatch } = useNavControl();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    navDispatch({ type: "closeModal" });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      navDispatch({ type: "openModal" });
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  if (!mounted) return null;

  // Determine initial/exit values based on direction
  let initial, animate, exit;
  switch (direction) {
    case "bottom":
      initial = { y: "100vh", opacity: 0 };
      animate = { y: 0, opacity: 1 };
      exit = { y: "-100vh", opacity: 0 };
      break;
    case "left":
      initial = { x: "-100vw", opacity: 0 };
      animate = { x: 0, opacity: 1 };
      exit = { x: "100vw", opacity: 0 };
      break;
    case "right":
      initial = { x: "100vw", opacity: 0 };
      animate = { x: 0, opacity: 1 };
      exit = { x: "-100vw", opacity: 0 };
      break;
    case "top":
    default:
      initial = { y: "-100vh", opacity: 0 };
      animate = { y: 0, opacity: 1 };
      exit = { y: "100vh", opacity: 0 };
      break;
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }} // optional
          className={overlayClassName}
          onClick={handleClose}
        >
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ type: "spring", stiffness: 250, damping: 35 }}
            className={modalClassName}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              aria-label="Close modal"
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal-root")
  );
}
