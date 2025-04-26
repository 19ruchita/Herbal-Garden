import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, BookOpen, Star } from 'lucide-react';

const Sidebar = ({ darkMode }) => {
  return (
    <div className={`w-64 fixed left-0 top-0 h-full ${darkMode ? 'bg-gray-800' : 'bg-green-50'} p-4 pt-20 shadow-lg`}>
      <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        Herbal Categories
      </h3>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/common-herbs" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-green-700'}`}>
              <Leaf className="w-5 h-5" /> Common Herbs
            </Link>
          </li>
          <li>
            <Link to="/ayurvedic" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-green-700'}`}>
              <Heart className="w-5 h-5" /> Ayurvedic Herbs
            </Link>
          </li>
          <li>
            <Link to="/chinese" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-green-700'}`}>
              <BookOpen className="w-5 h-5" /> Chinese Herbs
            </Link>
          </li>
          <li>
            <Link to="/featured" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-green-700'}`}>
              <Star className="w-5 h-5" /> Featured Herbs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;