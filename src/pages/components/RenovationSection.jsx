import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const RenovationSection = () => {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 sm:px-8">
        {/* Left Side: Image */}
        <div
          className={`relative w-full md:w-1/2 transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          {/* Decorative Frame */}
          <div className="absolute -top-6 -left-6 border-4 border-amber-500 rounded-lg w-64 h-64 z-10 hidden md:block opacity-80"></div>

          <div className="relative z-20 group">
            <Image
              src="/1.jpg"
              alt="Lavori di ristrutturazione"
              width={500}
              height={500}
              className="rounded-xl shadow-xl w-full md:w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Decorative Dots */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[url('/dots-pattern.png')] bg-cover opacity-40 z-0 hidden md:block"></div>
        </div>

        {/* Right Side: Text Content */}
        <div
          className={`w-full md:w-1/2 text-left transform transition-all duration-700 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}
        >
          <span className="text-amber-500 font-semibold uppercase tracking-widest text-xs">
            Dal 1993
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mt-2">
            Ristrutturazioni, Consolidamento e Restauro
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed max-w-xl">
            Da oltre 30 anni trasformiamo il patrimonio edilizio con un approccio conservativo, integrando tecniche tradizionali e soluzioni innovative. La soddisfazione del cliente è al centro del nostro lavoro, garantendo qualità e continuità in Piemonte e oltre.
          </p>

          {/* Button */}
          <a
            href="/services"
            className="inline-block bg-amber-500 text-white font-semibold py-3 px-6 mt-6 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Scopri di Più
          </a>
        </div>
      </div>
    </section>
  );
};

export default RenovationSection;