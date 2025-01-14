import React, { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay iniziale per effetto entrata
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById("sottostante");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[30vh] bg-gray-800 transition-all duration-700 ${
        isVisible ? "fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <h1
        className="text-white text-2xl sm:text-3xl font-semibold mb-6 transition-all duration-700"
      >
        Contattaci per un Preventivo
      </h1>
      <button
        onClick={scrollToContent}
        className="text-yellow-500 hover:text-yellow-300 focus:outline-none animate-bounce"
      >
        <FaArrowDown size={30} />
      </button>
    </div>
  );
};

export default CallToAction;
