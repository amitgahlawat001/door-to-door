import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full 
                     bg-gradient-to-r from-blue-500 to-indigo-600 
                     text-white shadow-lg hover:from-indigo-600 hover:to-purple-600
                     transform transition-all duration-300 hover:scale-110 hover:rotate-12"
        >
          <FaArrowUp size={22} className="animate-bounce" />
        </button>
      )}
    </>
  );
};

export default GoToTop;
