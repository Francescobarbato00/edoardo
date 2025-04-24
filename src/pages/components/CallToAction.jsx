import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const CallToAction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Reduced delay for smoothness
  }, []);

  const scrollToContent = () => {
    const target = document.getElementById('sottostante');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-[30vh] bg-gray-900 text-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-center px-4">
        Richiedi un Preventivo
      </h1>
      <button
        onClick={scrollToContent}
        className="text-amber-500 hover:text-amber-400 focus:outline-none animate-bounce"
        aria-label="Scorri alla sezione contatti"
      >
        <FaArrowDown size={28} />
      </button>
    </div>
  );
};

export default CallToAction;