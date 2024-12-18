import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Stato per controllare il menu mobile

  return (
    <header className="bg-white top-0 left-0 w-full z-50 shadow-lg">
      {/* Top Bar */}
      <div className="bg-gray-100 hidden md:flex justify-start items-center py-4 px-8 text-gray-700 text-base font-medium">
        <div className="flex items-center space-x-3 mr-8">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500 text-lg" />
          <span className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            Via di Vitinia, 100140 Vitinia (RM)
          </span>
        </div>
        <div className="flex items-center space-x-3 mr-8">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-500 text-lg" />
          <a href="tel:01312312123" className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            013 123 12 123
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500 text-lg" />
          <a href="mailto:info@edilges.it" className="hover:text-yellow-500 transition duration-300 cursor-pointer">
            info@edilges.it
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo Animato */}
        <div className="text-yellow-500 text-4xl font-extrabold tracking-wider animate-fade-slide-in">
          EDILGES
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-gray-700 text-lg font-semibold animate-slide-down">
          {[
            { href: "/", label: "Home" },
            { href: "/chi-siamo", label: "Chi siamo" },
            { href: "/servizi", label: "Servizi" },
            { href: "/contattaci", label: "Contattaci" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-yellow-500 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-yellow-500 text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex relative group">
          <a
            href="tel:01119210639"
            className="flex items-center justify-center w-12 h-12 bg-yellow-500 text-black rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-12 shadow-lg"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <button
            className="absolute top-6 right-6 text-3xl text-white"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className="flex flex-col space-y-8 text-2xl font-bold text-center">
            {[
              { href: "/", label: "Home" },
              { href: "/chi-siamo", label: "Chi siamo" },
              { href: "/servizi", label: "Servizi" },
              { href: "/contattaci", label: "Contattaci" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-yellow-500 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
