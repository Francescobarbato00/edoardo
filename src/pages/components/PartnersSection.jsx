import React from 'react';
import Image from 'next/image';

const PartnersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left: Team Image */}
        <div className="relative">
          <Image
            src="/team.jpg" // Percorso corretto della tua immagine team
            alt="Team"
            width={600}
            height={500}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Right: Partner Logos */}
        <div className="text-center md:text-left">
          <h3 className="text-yellow-500 uppercase text-sm font-semibold mb-4">Partner</h3>
          <h2 className="text-4xl font-bold text-black mb-8">
            I Partner che ci aiutano a<br /> realizzare progetti straordinari
          </h2>

          {/* Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <img src="/partner1-logo.png" alt="Partner 1" className="w-full h-auto" />
            <img src="/partner2-logo.png" alt="Partner 2" className="w-full h-auto" />
            <img src="/partner3-logo.png" alt="Partner 3" className="w-full h-auto" />
            <img src="/partner4-logo.png" alt="Partner 4" className="w-full h-auto" />
            <img src="/partner5-logo.png" alt="Partner 5" className="w-full h-auto" />
            <img src="/partner6-logo.png" alt="Partner 6" className="w-full h-auto" />
            <img src="/partner7-logo.png" alt="Partner 7" className="w-full h-auto" />
            <img src="/partner8-logo.png" alt="Partner 8" className="w-full h-auto" />
            <img src="/partner9-logo.png" alt="Partner 9" className="w-full h-auto" />
            <img src="/partner10-logo.png" alt="Partner 10" className="w-full h-auto" />
            <img src="/partner11-logo.png" alt="Partner 11" className="w-full h-auto" />
            <img src="/partner12-logo.png" alt="Partner 12" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
