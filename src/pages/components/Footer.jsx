import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-12">
      {/* Main Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-8">
        {/* Logo and Description */}
        <div>
          <Image src="/7.png" alt="Edil Company Logo" width={130} height={50} className="mb-4" />
          <p className="text-gray-400 leading-relaxed">
            Impresa edile specializzata nella manutenzione ordinaria e straordinaria, nella ristrutturazione, nel consolidamento, nel recupero e nel restauro conservativo.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-black hover:bg-yellow-600 transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-black hover:bg-yellow-600 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-full text-black hover:bg-yellow-600 transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-yellow-500 text-lg font-semibold mb-4 uppercase">Menu</h4>
          <ul className="space-y-3">
            <li>
              <a href="/chi-siamo" className="hover:text-yellow-500 transition duration-300">
                Chi siamo
              </a>
            </li>
            <li>
              <a href="/servizi" className="hover:text-yellow-500 transition duration-300">
                Servizi
              </a>
            </li>
            <li>
              <a href="/lavori" className="hover:text-yellow-500 transition duration-300">
                Lavori
              </a>
            </li>
            <li>
              <a href="/contattaci" className="hover:text-yellow-500 transition duration-300">
                Contattaci
              </a>
            </li>
            <li>
              <a href="/lavora-con-noi" className="hover:text-yellow-500 transition duration-300">
                Lavora con noi
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-yellow-500 text-lg font-semibold mb-4 uppercase">Servizi</h4>
          <ul className="space-y-3">
            <li>
              <a href="/ristrutturazione" className="hover:text-yellow-500 transition duration-300">
                Ristrutturazione
              </a>
            </li>
            <li>
              <a href="/restauro" className="hover:text-yellow-500 transition duration-300">
                Restauro
              </a>
            </li>
            <li>
              <a href="/manutenzione" className="hover:text-yellow-500 transition duration-300">
                Manutenzione
              </a>
            </li>
            <li>
              <a
                href="/riqualificazioni"
                className="hover:text-yellow-500 transition duration-300"
              >
                Riqualificazioni
              </a>
            </li>
            <li>
              <a href="/rifacimento-tetti" className="hover:text-yellow-500 transition duration-300">
                Rifacimento tetti
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 mt-6">
        <p>P. IVA 1234567890 – C.F. 123456789</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Edil Company. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
