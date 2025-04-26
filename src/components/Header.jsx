import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ darkMode, isScrolled }) => {
  return (
    <header className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled 
        ? `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} shadow-md backdrop-blur-sm` 
        : `${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-6" />
          <span className={`ml-2 text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
            Herbal Garden
          </span>
        </div>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4 text-sm">
            <Link to="/" className={`${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>Home</Link>
            <Link to="/about" className={`${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>About</Link>
            <Link to="/support" className={`${darkMode ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>Support</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;