"use client";
import { useEffect, useState } from "react";
import { useNavControl } from "@/context/nav-control-context";

const large = "(min-width: 1200px)";
const medium = "(min-width: 938px) and (max-width: 1199px)";
// const small = "(max-width: 767px)";

export default function useMediaQuery() {
  const [matches, setMatches] = useState("mobile");
  const [targetWidth, setTargetWidth] = useState("100vw");
  const { navState } = useNavControl();

  useEffect(() => {
    const isLarge = window.matchMedia(large);
    const isMedium = window.matchMedia(medium);
    // const isMobile = window.matchMedia(small);

    if (!navState.isHeroShrinked) {
      setTargetWidth("100vw");
    } else {
      if (isLarge.matches) {
        setTargetWidth("500px");
      } else if (isMedium.matches) {
        setTargetWidth("400px");
      } else {
        setTargetWidth("0px");
      }
    }

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
  }, [navState.isHeroShrinked, matches]);

  return { matches, targetWidth };
}
