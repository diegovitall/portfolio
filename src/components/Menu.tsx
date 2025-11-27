import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Menu as MenuIcon, X as XIcon } from 'lucide-react';

export function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 641px)' });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="header" className="mt-4 mb-8">
      <div className="container mx-auto px-4 py-4 pt-8 flex justify-end items-center">
        {/* Desktop Navigation - visible on desktop, hidden on mobile */}
        {isDesktop && (
          <ul className="flex nav-list">
            <li><a href="#header" className="text-white hover:text-green-400 transition-colors">Home</a></li>
            <li><a href="#projects" className="text-white hover:text-green-400 transition-colors">Projetos</a></li>
            <li><a href="#technologies" className="text-white hover:text-green-400 transition-colors">Tecnologia</a></li>
            <li><a href="#contact" className="text-white hover:text-green-400 transition-colors">Contato</a></li>
          </ul>
        )}

        {/* Hamburger Button - visible on mobile, hidden on desktop */}
        {!isDesktop && !isMenuOpen && (
          <div className="container mx-auto flex justify-start">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        )}

        {!isDesktop && isMenuOpen && (
          <div className="container mx-auto flex justify-start">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>

      {/* Mobile Menu Modal - only appears when isMenuOpen is true AND it's a mobile screen */}
      {!isDesktop && isMenuOpen && (
        <div>
          <button
            onClick={toggleMenu}
            className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50"
            aria-label="Close menu"
          ></button>
          <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 z-50 p-4"> {/* Side menu */}
            <ul className="flex flex-col space-y-4 mt-4">
              <li><a href="#header" onClick={toggleMenu} className="text-white hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#projects" onClick={toggleMenu} className="text-white hover:text-green-400 transition-colors">Projetos</a></li>
              <li><a href="#technologies" onClick={toggleMenu} className="text-white hover:text-green-400 transition-colors">Tecnologia</a></li>
              <li><a href="#contact" onClick={toggleMenu} className="text-white hover:text-green-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
