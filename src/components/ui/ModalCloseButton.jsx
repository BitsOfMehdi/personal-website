import { useNavControl } from "@/context/nav-control-context";

export default function ModalCloseButton() {
  const { navDispatch } = useNavControl();

  return (
    <button
      onClick={() => navDispatch({ type: "closeModal" })}
      style={{
        alignSelf: "flex-end",
        background: "transparent",
        border: "none",
        fontSize: "1.5rem",
        cursor: "pointer",
      }}
      aria-label="Close modal"
    >
      &times;
    </button>
  );
}
