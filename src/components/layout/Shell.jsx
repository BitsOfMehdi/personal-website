"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";

export default function Shell() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isSlideHero, setIsSlideHero] = useState(false);

  // Run only on first load / refresh
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, "", "/");
    }
  }, []);

  useEffect(() => {
    const h = window.location.hash;
    const next = h === "#about" || h === "#work";
    setIsSlideHero(next);
  }, [pathname, searchParams]);

  return (
    <>
      <Hero slideHero={isSlideHero} />
    </>
  );
}
