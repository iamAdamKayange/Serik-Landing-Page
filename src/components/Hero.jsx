import React, { useState, useEffect } from 'react';
// Import picha zako (weka kwenye src/assets/images)
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
// Import logo ya SERIK
import logoSerik from '../assets/images/seriki.png';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onTafutaClick, onSajiliClick }) => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="nyumbani" className={`min-h-[90vh] flex items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900'
    } text-white`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 text-center lg:text-left">
          {/* LOGO YA SERIK KWA UMBO LA DUAIRA (CIRCLE) */}
          <div className="flex justify-center lg:justify-start mb-2">
            <div className="relative">
              <img
                src={logoSerik}
                alt="SERIK Logo"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-emerald-400/30 shadow-2xl shadow-emerald-900/50 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full border-2 border-emerald-400/20 animate-pulse pointer-events-none"></div>
            </div>
          </div>

          {/* Badge ndogo */}
          <span className={`inline-flex items-center gap-1.5 border text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
            isDarkMode
              ? 'bg-gray-800/50 border-gray-600 text-emerald-300'
              : 'bg-emerald-800/50 border-emerald-700 text-emerald-300'
          }`}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            {t('badge')}
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            {t('hero_title')} <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">{t('hero_title_highlight')}</span>
          </h1>
          <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-xl mx-auto lg:mx-0 ${
            isDarkMode ? 'text-gray-300' : 'text-emerald-100/80'
          }`}>
            {t('hero_desc')}
            <span className={`block mt-3 font-medium italic border-l-2 pl-3 ${
              isDarkMode ? 'text-emerald-400 border-emerald-500' : 'text-emerald-300 border-emerald-500'
            }`}>
              {t('hero_quote')}
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={onTafutaClick}
              className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-xl text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition duration-200 shadow-lg shadow-emerald-900/40 transform hover:-translate-y-0.5"
            >
              {t('hero_btn_find')}
            </button>
            <button
              onClick={onSajiliClick}
              className={`inline-flex justify-center items-center px-8 py-3.5 border text-base font-bold rounded-xl transition duration-200 transform hover:-translate-y-0.5 backdrop-blur-sm ${
                isDarkMode
                  ? 'border-gray-600 text-gray-200 bg-gray-800/30 hover:bg-gray-800/50'
                  : 'border-emerald-700 text-emerald-200 bg-emerald-900/30 hover:bg-emerald-800/40'
              }`}
            >
              {t('hero_btn_register')}
            </button>
          </div>
          <div className={`pt-6 border-t grid grid-cols-3 gap-4 max-w-sm mx-auto lg:mx-0 text-left ${
            isDarkMode ? 'border-gray-700' : 'border-emerald-800/60'
          }`}>
            <div><p className="text-2xl font-black text-emerald-300">100+</p><p className={`text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-emerald-200/60'
            }`}>{t('hero_stats_houses')}</p></div>
            <div><p className="text-2xl font-black text-emerald-300">0%</p><p className={`text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-emerald-200/60'
            }`}>{t('hero_stats_brokers')}</p></div>
            <div><p className="text-2xl font-black text-emerald-300">100%</p><p className={`text-xs font-medium ${
              isDarkMode ? 'text-gray-400' : 'text-emerald-200/60'
            }`}>{t('hero_stats_verified')}</p></div>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end">
          <div className={`w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl relative border-4 backdrop-blur-md ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-emerald-950 border-emerald-800/40'
          }`}>
            <img
              src={images[currentIndex]}
              alt={`Getto ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-emerald-400 w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className={`absolute top-8 -left-6 border backdrop-blur-md p-3 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce ${
            isDarkMode
              ? 'bg-gray-800/90 border-gray-700'
              : 'bg-emerald-900/90 border-emerald-700/50'
          }`} style={{animationDuration: '4s'}}>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <p className={`text-xs font-bold ${
              isDarkMode ? 'text-emerald-300' : 'text-emerald-100'
            }`}>{t('new_room_added')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;