import React from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center group">
            <GraduationCap className="h-8 w-8 text-indigo-600 group-hover:scale-110 transition-transform" />
            <span className="ml-2 text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">Future Skills School</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 font-medium">Login</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
            <Link to="/login" className="block px-3 py-2 text-indigo-600 hover:text-indigo-700 font-medium">Login</Link>
          </div>
        </div>
      )}
    </nav>
  );
}