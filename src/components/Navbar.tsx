import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-2xl text-orange-600">
            <a href="#home" aria-label="Maavii's Cuisine home">MAAVII'S CUISINE</a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-orange-600">Home</a>
              <a href="#about" className="hover:text-orange-600">About</a>
              <a href="#services" className="hover:text-orange-600">Services</a>
              <a href="#menu" className="hover:text-orange-600">Menu</a>
              <a href="#gallery" className="hover:text-orange-600">Gallery</a>
              <a href="#coming-soon" className="hover:text-orange-600">Coming Soon</a>
              <a href="#contact" className="hover:text-orange-600">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:bg-orange-50">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-orange-50">About</a>
            <a href="#services" className="block px-3 py-2 hover:bg-orange-50">Services</a>
            <a href="#menu" className="block px-3 py-2 hover:bg-orange-50">Menu</a>
            <a href="#gallery" className="block px-3 py-2 hover:bg-orange-50">Gallery</a>
            <a href="#coming-soon" className="block px-3 py-2 hover:bg-orange-50">Coming Soon</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-orange-50">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}