import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
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
    <section ref={sectionRef} className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perché Sceglierci
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Scopri i valori che guidano il nostro lavoro e ci distinguono nel settore edile.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className={`group bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/icon-1.png"
                alt="Trasparenza"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-white text-xl font-semibold ml-4">
                Trasparenza
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              La trasparenza di Edilges si riflette nell’apertura totale verso clienti, fornitori e collaboratori, garantendo fiducia e chiarezza.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className={`group bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/icon-2.png"
                alt="Esperienza"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-white text-xl font-semibold ml-4">
                Esperienza
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Da oltre 20 anni operiamo nel settore edile, adottando tecniche innovative e una filosofia conservativa.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className={`group bg-gray-800 rounded-xl p-6 shadow-lg transform transition-all duration-700 ease-out hover:shadow-xl hover:-translate-y-2 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="flex items-center mb-4">
              <Image
                src="/icon-3.png"
                alt="Tempestività"
                width={48}
                height={48}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-white text-xl font-semibold ml-4">
                Tempestività
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              EDILGES garantisce lavori rapidi e di qualità, rispettando i tempi senza compromessi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;