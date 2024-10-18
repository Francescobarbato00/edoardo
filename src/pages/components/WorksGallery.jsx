import React from 'react';
import Image from 'next/image';

const WorksGallery = () => {
  return (
    <section className="bg-[#262626] py-16 px-4">
      <div className="container mx-auto flex justify-between items-center mb-8">
        {/* Left Title */}
        <h2 className="text-white text-4xl font-bold">
          Lavori Eseguiti
          <div className="w-12 h-1 bg-yellow-500 mt-2"></div>
        </h2>

        {/* Right Button */}
        <a
          href="/gallery"
          className="text-white border border-white px-6 py-3 hover:bg-white hover:text-gray-900 transition"
        >
          GUARDA TUTTI
        </a>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div className="relative">
          <Image
            src="/9.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 1"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 2 */}
        <div className="relative">
          <Image
            src="/10.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 2"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 3 */}
        <div className="relative">
          <Image
            src="/11.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 3"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 4 */}
        <div className="relative">
          <Image
            src="/12.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 4"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 5 */}
        <div className="relative">
          <Image
            src="/13.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 5"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Image 6 */}
        <div className="relative">
          <Image
            src="/14.jpg" // Inserisci il percorso della tua immagine
            alt="Lavoro 6"
            width={400}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default WorksGallery;
