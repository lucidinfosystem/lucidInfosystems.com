"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg 
            transition-all duration-500 ease-in-out hover:scale-110
            ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0 pointer-events-none"
            }`}
          aria-label="Go to top"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </>
  );
}
