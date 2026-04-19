import { useState, useEffect, CSSProperties } from "react";
import { easeIn, type Transition } from "motion";
import useMediaQuery from "./useMediaQuery";

export default function useAnimate() {
  // this hook to manage all animate values and logic in one place and make it reusable across components
  // it will return objects conatins css/motion values for left and right container transforms, as well as duration and ease values.
  const [transformLeft, setTransformLeft] = useState<CSSProperties>({
    maxWidth: "1200px",
    x: "0px",
  });
  const [transformRight, setTransformRight] = useState<CSSProperties>({
    maxWidth: "0px",
    x: "1200px",
    visibility: "visible",
    width: "100vw",
  });
  const { matches } = useMediaQuery();

  const defaultTransformLeft: typeof transformLeft = {
    maxWidth: "1200px",
    x: "0px",
    width: "100vw",
  };
  const defaulttransformRight: typeof transformRight = {
    maxWidth: "0px",
    width: "0px",
    x: "min(1200px, 100vw)",
    visibility: "hidden",
  };
  const transition: Transition = { duration: 0.3, ease: easeIn };

  useEffect(() => {
    // Update transform values based on media query matches
    if (matches === "desktop") {
      setTransformLeft((prev) => ({ ...prev, maxWidth: "500px", x: "0px" }));
      setTransformRight((prev) => ({ ...prev, maxWidth: "700px", x: "500px" }));
    } else if (matches === "tablet") {
      setTransformLeft((prev) => ({ ...prev, maxWidth: "400px", x: "0px" }));
      setTransformRight((prev) => ({
        ...prev,
        maxWidth: "calc(100vw - 400px)",
        x: "400px",
      }));
    } else {
      setTransformLeft((prev) => ({ ...prev, maxWidth: "0px", x: "-100vw" }));
      setTransformRight((prev) => ({ ...prev, maxWidth: "100vw", x: "0px" }));
    }
  }, [matches]);

  return {
    defaultTransformLeft,
    defaulttransformRight,
    transformLeft,
    transformRight,
    transition,
  };
}
