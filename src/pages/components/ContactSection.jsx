import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-20 md:py-24"
      style={{ backgroundImage: `url('/hand.jpg')` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/40"></div>

      <div className="relative container mx-auto px-6 sm:px-8 text-white text-center md:text-left">
        {/* Title and Description */}
        <div className="mb-12">
          <h4
            className="text-amber-500 uppercase text-xs font-semibold tracking-widest mb-3 animate-fade-in"
          >
            Pronto a Realizzare il Tuo Progetto?
          </h4>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight animate-slide-in"
          >
            Contattaci per Informazioni o Preventivi
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 animate-fade-in delay-100"
          >
            Siamo pronti a trasformare le tue idee in realtà con soluzioni personalizzate e professionali.
          </p>
          <a
            href="/contattaci"
            className="inline-block bg-amber-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in delay-200"
          >
            Contattaci Ora
          </a>
        </div>

        {/* Contact Info */}
        <div className="bg-white text-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Telefono */}
          <div className="group flex flex-col sm:flex-row items-center transition-all duration-300">
            <div className="bg-amber-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-amber-500 transition-colors">
                Telefono
              </p>
              <p className="text-gray-600 text-sm sm:text-base">123 44567</p>
            </div>
          </div>

          {/* Email */}
          <div className="group flex flex-col sm:flex-row items-center transition-all duration-300">
            <div className="bg-amber-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-amber-500 transition-colors">
                Email
              </p>
              <p className="text-gray-600 text-sm sm:text-base">info@edilges.it</p>
            </div>
          </div>

          {/* Posizione */}
          <div className="group flex flex-col sm:flex-row items-center transition-all duration-300">
            <div className="bg-amber-500 p-4 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
              <p className="font-semibold text-base sm:text-lg text-gray-900 group-hover:text-amber-500 transition-colors">
                Dove Siamo
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