"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useNavControl } from "@/context/nav-control-context";
import sytles from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  direction: string;
};

export default function Modal({
  children,
  direction = "top", // default direction
}: ModalProps) {
  const { navState, navDispatch } = useNavControl();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {navState.isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={sytles.overlay}
          onClick={() => navDispatch({ type: "closeModal" })}
        >
          <motion.div
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{ type: "spring", stiffness: 250, damping: 35 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal-root"),
  );
}
