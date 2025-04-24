import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 left-0 w-full z-50 shadow-xl">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 hidden md:flex justify-start items-center py-3 px-10 text-gray-600 text-sm font-medium">
        <div className="flex items-center space-x-2 mr-6 group">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 text-base transition-transform group-hover:scale-110" />
          <span className="group-hover:text-amber-500 transition-colors duration-300 cursor-pointer">
            Via di Vitinia, 100140 Vitinia (RM)
          </span>
        </div>
        <div className="flex items-center space-x-2 mr-6 group">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-amber-500 text-base transition-transform group-hover:scale-110" />
          <a href="tel:01312312123" className="group-hover:text-amber-500 transition-colors duration-300">
            013 123 12 123
          </a>
        </div>
        <div className="flex items-center space-x-2 group">
          <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 text-base transition-transform group-hover:scale-110" />
          <a href="mailto:info@edilges.it" className="group-hover:text-amber-500 transition-colors duration-300">
            info@edilges.it
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-amber-500 text-3xl font-bold tracking-tight transition-transform duration-300 hover:scale-105">
          <Link href="/">EDILGES</Link>
          {/* Mobile Contact Info */}
          <div className="block md:hidden mt-3 text-gray-600 text-xs space-y-2">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-amber-500 text-sm" />
              <span>Via di Vitinia, 100140 Vitinia (RM)</span>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-amber-500 text-sm" />
              <a href="tel:01312312123" className="hover:text-amber-500 transition-colors">013 123 12 123</a>
            </div>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-amber-500 text-sm" />
              <a href="mailto:info@edilges.it" className="hover:text-amber-500 transition-colors">info@edilges.it</a>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-gray-600 text-base font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "Chi siamo" },
            { href: "/services", label: "Servizi" },
            { href: "/contact", label: "Contattaci" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-2 py-1 hover:text-amber-500 transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-amber-500 text-2xl transition-transform duration-300 hover:scale-110"
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden md:flex relative group">
          <a
            href="tel:01119210639"
            className="flex items-center justify-center w-10 h-10 bg-amber-500 text-white rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          >
            <FontAwesomeIcon icon={faPhoneAlt} className="text-lg" />
          </a>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center text-white transition-opacity duration-300">
          <button
            className="absolute top-6 right-6 text-3xl text-amber-500 transition-transform duration-300 hover:scale-110"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <nav className="flex flex-col space-y-6 text-xl font-semibold text-center">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "Chi siamo" },
              { href: "/services", label: "Servizi" },
              { href: "/contact", label: "Contattaci" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 hover:text-amber-500 transition-colors duration-300 group"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;