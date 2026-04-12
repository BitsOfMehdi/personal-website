import { useState, useEffect } from "react";
import { easeIn } from "motion";
import useMediaQuery from "./useMediaQuery";

export default function useAnimate() {
  // this hook to manage all animate values and logic in one place and make it reusable across components
  // it will return objects conatins css/motion values for left and right container transforms, as well as duration and ease values.
  const [transformLeft, setTransformLeft] = useState({
    maxWidth: "1200px",
    x: "0px",
  });
  const [transformRight, setTransformRight] = useState({
    maxWidth: "0px",
    x: "1200px",
    visibility: "visible",
    width: "100vw",
  });
  const { matches } = useMediaQuery();

  useEffect(() => {
    // Update transform values based on media query matches
    if (matches === "large") {
      setTransformLeft({ maxWidth: "500px", x: "0px" });
      setTransformRight((prev) => {
        return { ...prev, maxWidth: "700px", x: "500px" };
      });
    } else if (matches === "medium") {
      setTransformLeft({ maxWidth: "400px", x: "0px" });
      setTransformRight((prev) => {
        return { ...prev, maxWidth: "calc(100vw - 400px)", x: "400px" };
      });
    } else {
      setTransformLeft({ maxWidth: "0px", x: "-100vw" });
      setTransformRight((prev) => {
        return { ...prev, maxWidth: "100vw", x: "0px" };
      });
    }
  }, [matches]);

  const defaultTransformLeft = {
    maxWidth: "1200px",
    x: "0px",
    width: "100vw",
  };
  const defaulttransformRight = {
    maxWidth: "0px",
    width: "0px",
    x: "min(1200px, 100vw)",
    visibility: "hidden",
  };
  const transition = { duration: 0.3, ease: easeIn };

  return {
    defaultTransformLeft,
    defaulttransformRight,
    transformLeft,
    transformRight,
    transition,
  };
}
