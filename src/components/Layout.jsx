import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Sun, Moon, ChevronDown } from 'lucide-react';

const Layout = ({ children, darkMode, toggleDarkMode }) => {
  const [showScrollDown, setShowScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollDown(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? 'bg-dark-primary text-dark-primary' : 'bg-white text-gray-800'
      }`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer darkMode={darkMode} />

        {/* Floating Buttons */}
        <button
          onClick={toggleDarkMode}
          className={`fixed bottom-6 left-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
            darkMode 
              ? 'bg-gray-800 hover:bg-gray-700 text-white' 
              : 'bg-white hover:bg-gray-100 text-gray-800'
          }`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-amber-400" />
          ) : (
            <Moon className="w-6 h-6 text-gray-600" />
          )}
        </button>

        {showScrollDown && (
          <button
            onClick={scrollToBottom}
            className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
              darkMode 
                ? 'bg-amber-600 hover:bg-amber-700' 
                : 'bg-amber-500 hover:bg-amber-600'
            } text-white`}
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Layout;