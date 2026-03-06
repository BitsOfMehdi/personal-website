"use client";
import { useEffect, useState } from "react";

const large = "(min-width: 1200px)";
const medium = "(min-width: 938px) and (max-width: 1199px)";
// const small = "(max-width: 767px)";

export default function useMediaQuery() {
  const [matches, setMatches] = useState("mobile");

  useEffect(() => {
    const isLarge = window.matchMedia(large);
    const isMedium = window.matchMedia(medium);
    // const isMobile = window.matchMedia(small);

    const listener = () => {
      if (isLarge.matches) {
        setMatches("large");
      } else if (isMedium.matches) {
        setMatches("medium");
      } else {
        setMatches("mobile");
      }
    };

    listener(); // Initial check on mount
    isLarge.addEventListener("change", listener);
    isMedium.addEventListener("change", listener);
    return () => {
      isLarge.removeEventListener("change", listener);
      isMedium.removeEventListener("change", listener);
    };
  }, []);

  return matches;
}
