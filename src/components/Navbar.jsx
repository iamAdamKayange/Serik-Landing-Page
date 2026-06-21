import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ onAnzaClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { key: 'home', label: t('nav_home'), href: '#nyumbani' },
    { key: 'features', label: t('nav_features'), href: '#vipengele' },
    { key: 'how', label: t('nav_how'), href: '#jinsiyakutumia' },
    { key: 'testimonials', label: t('nav_testimonials'), href: '#maoni' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
        : 'bg-white/90 backdrop-blur-md shadow-md'
    }`}>
      <div className="container-custom py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className={`text-2xl font-bold ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
            {t('app_name')}
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <a 
              key={item.key} 
              href={item.href} 
              className={`transition font-medium ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-emerald-400' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          {/* 🔥 Kitufe cha kubadilisha lugha */}
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-xl transition-colors flex items-center gap-1 ${
              isDarkMode 
                ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-emerald-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle language"
          >
            <FaGlobe size={16} />
            <span className="text-xs font-bold uppercase">{language === 'en' ? 'SW' : 'EN'}</span>
          </button>
          
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-colors ${
              isDarkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          <button 
            onClick={onAnzaClick}
            className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-emerald-700 transition"
          >
            {t('nav_start')}
          </button>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
      {isOpen && (
        <div className={`md:hidden border-t py-4 px-5 flex flex-col space-y-3 ${
          isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
        }`}>
          {navItems.map(item => (
            <a 
              key={item.key} 
              href={item.href} 
              className={`py-2 transition ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-emerald-400' 
                  : 'text-gray-700 hover:text-emerald-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className={`flex items-center justify-center gap-2 py-2 rounded-xl font-medium transition ${
              isDarkMode 
                ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-emerald-700 hover:bg-gray-200'
            }`}
          >
            <FaGlobe size={16} />
            <span className="text-sm font-bold uppercase">Switch to {language === 'en' ? 'Kiswahili' : 'English'}</span>
          </button>
          <button 
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className={`flex items-center justify-center gap-2 py-2 rounded-xl font-medium transition ${
              isDarkMode 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
            {isDarkMode ? 'Mwanga' : 'Giza'}
          </button>
          <button 
            onClick={() => {
              setIsOpen(false);
              onAnzaClick();
            }}
            className="bg-emerald-600 text-white py-2 rounded-xl font-semibold"
          >
            {t('nav_start')}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;