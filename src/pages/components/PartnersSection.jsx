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
      { threshold: 0.2 }
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
    <section
      ref={sectionRef}
      className="py-16 bg-white overflow-hidden"
    >
      <div
        className={`container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        } px-4 sm:px-8`}
      >
        {/* Left: Team Image */}
        <div className="relative">
          <Image
            src="/team.jpg" // Immagine reale
            alt="Team"
            width={600}
            height={500}
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Partner Icons */}
        <div className="text-center md:text-left">
          <h3 className="text-yellow-500 uppercase text-sm font-semibold mb-4 tracking-wide">
            Partner
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-snug">
            I Partner che ci aiutano a<br /> realizzare progetti straordinari
          </h2>

          {/* Icons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {icons.map((Icon, index) => (
              <div
                key={index}
                className={`transform transition-all duration-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } hover:scale-110`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center bg-gray-100 text-yellow-500 rounded-lg shadow-md w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                  <Icon className="text-3xl sm:text-4xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
