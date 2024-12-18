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
      { threshold: 0.2 } // L'animazione si attiva quando il 20% della sezione è visibile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-yellow-500 py-16 overflow-hidden">
      <div className="container mx-auto flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-12 justify-around px-4">
        {/* First Block: ISO */}
        <div
          className={`flex flex-col md:flex-row items-center md:items-start transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-16 opacity-0'
          }`}
        >
          {/* ISO Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/iso.png" // Percorso del logo ISO
              alt="ISO 9001 Logo"
              width={150}
              height={150}
              className="w-24 h-24 md:w-36 md:h-36"
            />
          </div>
          {/* ISO Text */}
          <div className="max-w-md">
            <p className="text-gray-900 text-lg text-center md:text-left">
              La norma ISO 9001 definisce i requisiti minimi che il Sistema di Gestione per la
              Qualità di un’organizzazione deve dimostrare di soddisfare per garantire il livello di
              qualità di prodotto e servizio che dichiara di possedere con sé stessa e con il
              mercato.
            </p>
          </div>
        </div>

        {/* Second Block: SOA */}
        <div
          className={`flex flex-col md:flex-row items-center md:items-start transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
          }`}
        >
          {/* SOA Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/soa.png" // Percorso del logo SOA
              alt="SOA Logo"
              width={150}
              height={150}
              className="w-24 h-24 md:w-36 md:h-36"
            />
          </div>
          {/* SOA Text */}
          <div className="max-w-md">
            <p className="text-gray-900 text-lg text-center md:text-left">
              La certificazione SOA è un riconoscimento di rilievo pubblico che attesta la capacità
              dell’impresa di eseguire, direttamente o in subappalto, opere pubbliche di rilevante
              importanza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
