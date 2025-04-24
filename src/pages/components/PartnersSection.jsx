import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython,
  FaJava,
  FaFigma,
  FaLinux,
} from 'react-icons/fa';

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 } // Increased to 30% for smoother trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const icons = [
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaPython,
    FaJava,
    FaFigma,
    FaLinux,
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6 sm:px-8 transform transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Left: Team Image */}
        <div className="relative group">
          <Image
            src="/team.jpg"
            alt="Il nostro team"
            width={600}
            height={500}
            className="object-cover w-full h-auto rounded-xl shadow-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-amber-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
        </div>

        {/* Right: Partner Icons */}
        <div className="text-center md:text-left">
          <h3
            className={`text-amber-500 uppercase text-xs font-semibold tracking-widest mb-3 transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Partner
          </h3>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight transform transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Partner per Progetti Straordinari
          </h2>
          <p
            className={`text-gray-600 text-sm sm:text-base mb-8 leading-relaxed max-w-md mx-auto md:mx-0 transform transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Collaboriamo con i migliori partner tecnologici per garantire soluzioni innovative e di alta qualità.
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className={`group flex items-center justify-center bg-white rounded-lg shadow-md w-14 h-14 sm:w-16 sm:h-16 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <Icon className="text-2xl sm:text-3xl text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;