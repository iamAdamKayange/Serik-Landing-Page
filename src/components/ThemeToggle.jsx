import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-300 ${
        isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      } ${className}`}
      aria-label="Toggle theme"
    >
      {isDark ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ThemeToggle;