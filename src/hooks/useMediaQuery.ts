"use client";
import { useEffect, useState } from "react";
import { useNavControl } from "@/context/nav-control-context";

const DESKTOP: string = "(min-width: 1200px)";
const TABLET: string = "(min-width: 938px) and (max-width: 1199px)";
// const MOBILE: string = "(max-width: 767px)";

type Matches = "desktop" | "tablet" | "mobile";

export default function useMediaQuery() {
  const [matches, setMatches] = useState<Matches>("mobile");
  const [targetWidth, setTargetWidth] = useState("100vw");
  const { navState } = useNavControl();

  useEffect(() => {
    const isDesktop = window.matchMedia(DESKTOP);
    const isTablet = window.matchMedia(TABLET);
    // const isMobile = window.matchMedia(small);

    if (!navState.isHeroShrinked) {
      setTargetWidth("100vw");
    } else {
      if (isDesktop.matches) {
        setTargetWidth("500px");
      } else if (isTablet.matches) {
        setTargetWidth("400px");
      } else {
        setTargetWidth("0px");
      }
    }

    const listener = () => {
      if (isDesktop.matches) {
        setMatches("desktop");
      } else if (isTablet.matches) {
        setMatches("tablet");
      } else {
        setMatches("mobile");
      }
    };

    listener(); // Initial check on mount
    isDesktop.addEventListener("change", listener);
    isTablet.addEventListener("change", listener);
    return () => {
      isDesktop.removeEventListener("change", listener);
      isTablet.removeEventListener("change", listener);
    };
  }, [navState.isHeroShrinked, matches]);

  return { matches, targetWidth };
}
