import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">
        {/* Logo and Description */}
        <div>
          <Image
            src="/7.png"
            alt="Edilges Logo"
            width={120}
            height={40}
            className="mb-6 filter brightness-0 invert"
          />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Specializzati in manutenzione, ristrutturazione, consolidamento e restauro conservativo, trasformiamo idee in realtà con qualità e professionalità.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: FaFacebookF, href: '#' },
              { icon: FaInstagram, href: '#' },
              { icon: FaLinkedinIn, href: '#' },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="w-10 h-10 flex items-center justify-center bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-300 hover:scale-105"
                aria-label={`Seguici su ${Icon.name}`}
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>

        {/* Menu Links */}
        <div>
          <h4 className="text-amber-500 text-base font-semibold uppercase tracking-widest mb-5">
            Menu
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: '/chi-siamo', label: 'Chi Siamo' },
              { href: '/servizi', label: 'Servizi' },
              { href: '/lavori', label: 'Lavori' },
              { href: '/contattaci', label: 'Contattaci' },
              { href: '/lavora-con-noi', label: 'Lavora con Noi' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="text-amber-500 text-base font-semibold uppercase tracking-widest mb-5">
            Servizi
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { href: '/ristrutturazione', label: 'Ristrutturazione' },
              { href: '/restauro', label: 'Restauro' },
              { href: '/manutenzione', label: 'Manutenzione' },
              { href: '/riqualificazioni', label: 'Riqualificazioni' },
              { href: '/rifacimento-tetti', label: 'Rifacimento Tetti' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-gray-300 hover:text-amber-500 transition-colors duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-xs text-gray-400 mt-8">
        <p>P. IVA 1234567890 – C.F. 123456789</p>
        <p className="mt-2">© {new Date().getFullYear()} Edilges. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;