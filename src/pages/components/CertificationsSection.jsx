import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const CertificationsSection = () => {
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
    <section ref={sectionRef} className="bg-amber-500 py-20 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Le Nostre Certificazioni
          </h2>
          <p
            className={`mt-4 text-gray-800 text-base sm:text-lg max-w-2xl mx-auto transform transition-all duration-700 ease-out delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
            }`}
          >
            Garantiamo qualità e professionalità attraverso certificazioni riconosciute a livello nazionale e internazionale.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-12 justify-center">
          {/* ISO Block */}
          <div
            className={`group flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/iso.png"
                alt="Certificazione ISO 9001"
                width={120}
                height={120}
                className="w-20 h-20 md:w-28 md:h-28 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO 9001</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                La norma ISO 9001 garantisce un Sistema di Gestione per la Qualità che assicura elevati standard di prodotto e servizio.
              </p>
            </div>
          </div>

          {/* SOA Block */}
          <div
            className={`group flex flex-col md:flex-row items-center md:items-start bg-white rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}
          >
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <Image
                src="/soa.png"
                alt="Certificazione SOA"
                width={120}
                height={120}
                className="w-20 h-20 md:w-28 md:h-28 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SOA</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                La certificazione SOA attesta la nostra capacità di eseguire opere pubbliche di rilevanza, con professionalità e competenza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;