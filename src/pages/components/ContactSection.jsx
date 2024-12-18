import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-16 md:py-24"
      style={{ backgroundImage: `url('/hand.jpg')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative container mx-auto px-4 sm:px-6 text-white text-center md:text-left">
        {/* Titolo e descrizione */}
        <div className="mb-12">
          <h4 className="text-yellow-500 uppercase text-xs sm:text-sm font-semibold tracking-widest mb-4">
            Sei pronto a realizzare il tuo progetto?
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Contattaci ora per informazioni o preventivi.
          </h2>
          <p className="mb-8 text-sm sm:text-lg md:text-xl leading-relaxed">
            Contattaci per ricevere preventivi personalizzati o informazioni sui nostri servizi. Siamo qui per trasformare le tue idee in realtà.
          </p>
          <a
            href="/contattaci"
            className="inline-block bg-yellow-500 text-black py-3 px-6 sm:px-8 rounded-full font-semibold hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Contattaci
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-white text-black p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8">
          {/* Telefono */}
          <div className="flex flex-col sm:flex-row items-center group">
            <div className="bg-yellow-500 p-4 sm:p-5 rounded-full transition-transform transform group-hover:scale-110">
              <FaPhoneAlt className="text-white text-2xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-yellow-500 transition">
                Telefono
              </p>
              <p className="text-gray-600 text-sm sm:text-base">123 44567</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center group">
            <div className="bg-yellow-500 p-4 sm:p-5 rounded-full transition-transform transform group-hover:scale-110">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-yellow-500 transition">
                Email
              </p>
              <p className="text-gray-600 text-sm sm:text-base">info@edilges.it</p>
            </div>
          </div>

          {/* Posizione */}
          <div className="flex flex-col sm:flex-row items-center group">
            <div className="bg-yellow-500 p-4 sm:p-5 rounded-full transition-transform transform group-hover:scale-110">
              <FaMapMarkerAlt className="text-white text-2xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-yellow-500 transition">
                Dove siamo
              </p>
              <p className="text-gray-600 text-sm sm:text-base">Via Don Zano, 14 (TO)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
