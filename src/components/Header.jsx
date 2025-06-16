"use client";
import { useEffect, useState } from "react";

const sections = ["about", "work", "contact", "blog"];

export default function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let found = false;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const offsetTop = window.scrollY + top;
          const offsetBottom = window.scrollY + bottom;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(id);
            found = true;
            break;
          }
        }
      }
      if (!found) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  return (
    <header className="sticky top-0 z-50 bg-background shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors"
          onClick={handleHomeClick}
        >
          Mehdi Mousavi
        </h1>

        <div className="flex items-center space-x-4">
          <hr className="w-[50px] border-t border-muted" />
          <ul className="flex justify-evenly items-center w-[320px] relative">
            {sections.map((section, index) => (
              <li
                key={section}
                className="flex-1 flex items-center justify-center space-x-1"
              >
                <a
                  href={`#${section}`}
                  onClick={() => setActiveSection(section)}
                  className={`inline-block transition-all duration-200 ${
                    activeSection === section
                      ? "font-bold translate-y-[10px] text-accent"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
                {index < sections.length - 1 && (
                  <span className="text-muted inline-block translate-y-[1px]">
                    •
                  </span>
                )}
              </li>
            ))}
          </ul>
          <hr className="w-[50px] border-t border-muted" />
        </div>
      </nav>
    </header>
  );
}
