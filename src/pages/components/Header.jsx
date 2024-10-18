import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="bg-transparent flex justify-end items-center py-2 px-4 space-x-6 text-white text-sm">
        <div className="flex items-center space-x-1">
          <span>📍</span>
          <span>Via Don Zano, 4/a, Vitinia (RM)</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>📞</span>
          <span>011 192 10 639 23</span>
        </div>
        <div className="flex items-center space-x-1">
          <span>✉️</span>
          <span>info@edilges.it</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto p-4 flex justify-between items-center border-b border-gray-600">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/7.png" alt="EDIL Company Logo" className="h-10" />
          <span className="ml-3 text-yellow-500 text-2xl font-bold">EDILGES</span>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 text-white">
          <Link href="/" className="hover:text-yellow-500 text-yellow-500 font-bold text-[17px] leading-[20px]">
            Home
          </Link>
          <Link href="/chi-siamo" className="hover:text-yellow-500 font-bold text-[17px] leading-[20px]">
            Chi siamo
          </Link>
          <Link href="/servizi" className="hover:text-yellow-500 font-bold text-[17px] leading-[20px]">
            Servizi
          </Link>
          <Link href="/lavori-realizzati" className="hover:text-yellow-500 font-bold text-[17px] leading-[20px]">
            Lavori realizzati
          </Link>
          <Link href="/lavora-con-noi" className="hover:text-yellow-500 font-bold text-[17px] leading-[20px]">
            Lavora con noi
          </Link>
          <Link href="/contattaci" className="hover:text-yellow-500 font-bold text-[17px] leading-[20px]">
            Contattaci
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="border border-white rounded-md p-2">
          <a href="tel:01119210639" className="text-white text-[17px] leading-[20px]">📞</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
