import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const CallToAction = () => {
  const scrollToContent = () => {
    const target = document.getElementById('sottostante');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fade-enter flex flex-col items-center justify-center min-h-[30vh] bg-gray-800">
      <h1 className="text-white text-3xl font-semibold mb-4">
        Contattaci per Un Preventivo
      </h1>
      <button 
        onClick={scrollToContent} 
        className="text-yellow-500 hover:text-yellow-300 focus:outline-none"
      >
        <FaArrowDown size={30} />
      </button>
    </div>
  );
};

export default CallToAction;
