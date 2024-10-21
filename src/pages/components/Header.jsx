import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-transparent flex justify-end items-center py-2 px-4 space-x-8 text-white text-[15px] leading-[24px] font-normal" style={{ fontFamily: 'Lato, sans-serif' }}>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-500" />
          <span>Via di Vitinia , 100140 Vitinia (RM)</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faPhoneAlt} className="text-yellow-500" />
          <span>013 123 12 123</span>
        </div>
        <div className="flex items-center space-x-1">
          <FontAwesomeIcon icon={faEnvelope} className="text-yellow-500" />
          <span>info@edilges.it</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-8 py-6 flex justify-between items-center border-b border-gray-600">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/7.png" alt="EDIL Company Logo" className="h-12" />
          <span className="ml-4 text-yellow-500 text-3xl font-bold">EDIL COMPANY</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-10 text-white">
          <Link href="/" className="hover:text-yellow-500 text-yellow-500 font-bold text-[18px] leading-[22px]">
            Home
          </Link>
          <Link href="/chi-siamo" className="hover:text-yellow-500 font-bold text-[18px] leading-[22px]">
            Chi siamo
          </Link>
          <Link href="/servizi" className="hover:text-yellow-500 font-bold text-[18px] leading-[22px]">
            Servizi
          </Link>
          <Link href="/lavori-realizzati" className="hover:text-yellow-500 font-bold text-[18px] leading-[22px]">
            Lavori realizzati
          </Link>
          <Link href="/lavora-con-noi" className="hover:text-yellow-500 font-bold text-[18px] leading-[22px]">
            Lavora con noi
          </Link>
          <Link href="/contattaci" className="hover:text-yellow-500 font-bold text-[18px] leading-[22px]">
            Contattaci
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="border border-white rounded-md p-3 flex items-center justify-center">
          <a href="tel:01119210639" className="text-white text-[18px] leading-[22px]">
            📞
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
