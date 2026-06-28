import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className={`pt-16 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-emerald-950'
    } text-white`}>
      <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? 'bg-gray-800/40' : 'bg-emerald-900/40'
      }`}></div>
      <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? 'bg-gray-800/30' : 'bg-emerald-900/30'
      }`}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-4">
            <span className="text-2xl font-black tracking-wider text-emerald-400">{t('app_name')}</span>
            <p className={`text-sm leading-relaxed max-w-sm ${
              isDarkMode ? 'text-gray-300' : 'text-emerald-200/70'
            }`}>
              {t('footer_tagline')}
            </p>
            <div className="pt-2 flex items-center gap-4">
              <a href="https://instagram.com/serik_app" target="_blank" className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                isDarkMode 
                  ? 'bg-gray-800 text-emerald-300 hover:bg-emerald-500 hover:text-gray-900' 
                  : 'bg-emerald-900/50 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-950'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/255681393000" target="_blank" className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                isDarkMode 
                  ? 'bg-gray-800 text-emerald-300 hover:bg-emerald-500 hover:text-gray-900' 
                  : 'bg-emerald-900/50 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-950'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
              </a>
              <a href="https://x.com/serik_app" target="_blank" className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                isDarkMode 
                  ? 'bg-gray-800 text-emerald-300 hover:bg-emerald-500 hover:text-gray-900' 
                  : 'bg-emerald-900/50 text-emerald-300 hover:bg-emerald-400 hover:text-emerald-950'
              }`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4l11.733 16h4.267l-11.733-16z M4 20l6.768-6.768M20 4l-6.768 6.768"/></svg>
              </a>
            </div>
          </div>
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">{t('footer_features')}</h4>
            <ul className={`space-y-2 text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-emerald-200/60'
            }`}>
              <li><a href="#" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-white'}`}>{t('footer_features_start')}</a></li>
              <li><a href="#" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-white'}`}>{t('footer_features_app')}</a></li>
              <li><a href="#" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-white'}`}>{t('footer_features_how')}</a></li>
              <li><a href="#" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-white'}`}>{t('footer_features_testimonials')}</a></li>
            </ul>
          </div>
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">{t('footer_contact')}</h4>
            <ul className={`space-y-3 text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-emerald-200/70'
            }`}>
              <li className="flex items-center gap-2.5">
                <svg className={`w-4 h-4 shrink-0 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+255681393000" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-emerald-300'}`}>+255 681 393 000</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className={`w-4 h-4 shrink-0 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:serikcompany2026@gmail.com" className={`transition ${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-emerald-300'}`}>serikcompany2026@gmail.com</a>
              </li>
              <li className={`flex items-center gap-2.5 ${
                isDarkMode ? 'text-gray-500' : 'text-emerald-200/50'
              }`}>
                <svg className={`w-4 h-4 shrink-0 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-400'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Dodoma, Tanzania</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={`mt-16 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium ${
          isDarkMode 
            ? 'border-gray-700 text-gray-400' 
            : 'border-emerald-900/40 text-emerald-300/40'
        }`}>
          <p>&copy; 2026 SERIK Inc. {t('footer_copyright')}</p>
          <p className="italic">{t('footer_quote')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;