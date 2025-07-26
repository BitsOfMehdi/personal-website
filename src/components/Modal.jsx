import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavControl } from "@/context/nav-control-context";

export default function Modal({ isOpen, onClose, children }) {
  const { navState, navDispatch } = useNavControl();
  // Prevent background scroll when modal is open

  const handleClose = () => {
    navDispatch({ type: "toggleModal" });
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      navDispatch({ type: "toggleModal" });
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "8px",
          padding: "2rem",
          minWidth: "300px",
          minHeight: "150px",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          position: "relative",
        }}
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
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
