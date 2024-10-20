import React from 'react';
import Image from 'next/image';

const CertificationsSection = () => {
  return (
    <section className="bg-yellow-500 py-16">
      <div className="container mx-auto flex flex-col space-y-12 md:space-y-0 md:flex-row md:space-x-12 justify-around">
        {/* First Block: ISO */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* ISO Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/iso.png" // Percorso del logo ISO
              alt="ISO 9001 Logo"
              width={150}
              height={150}
            />
          </div>
          {/* ISO Text */}
          <div className="max-w-md">
            <p className="text-gray-900 text-lg">
              La norma ISO 9001 definisce i requisiti minimi che il Sistema di Gestione per la Qualità di un’organizzazione deve dimostrare di soddisfare per garantire il livello di qualità di prodotto e servizio che dichiara di possedere con sé stessa e con il mercato..
            </p>
          </div>
        </div>

        {/* Second Block: SOA */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* SOA Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/soa.png" // Percorso del logo SOA
              alt="SOA Logo"
              width={150}
              height={150}
            />
          </div>
          {/* SOA Text */}
          <div className="max-w-md">
            <p className="text-gray-900 text-lg">
              La certificazione SOA è un riconoscimento di rilievo pubblico che attesta la capacità dell’impresa di eseguire, direttamente o in subappalto, opere pubbliche di rilevante importanza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
