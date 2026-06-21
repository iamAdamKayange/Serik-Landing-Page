import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const CTA = ({ onAnzaClick }) => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  return (
    <div className={`text-center max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-darkBg' : ''
    }`}>
      <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
        isDarkMode ? 'text-white' : 'text-slate-950'
      }`}>
        {t('cta_title')}
      </h2>
      <p className={`mt-4 text-base max-w-xl mx-auto ${
        isDarkMode ? 'text-emerald-400' : 'text-emerald-700/80'
      }`}>
        {t('cta_desc')}
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <button
          onClick={onAnzaClick}
          className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-white font-black rounded-xl shadow-lg transition duration-200 hover:bg-emerald-700 hover:scale-[1.02] text-center text-sm uppercase tracking-wider"
        >
          {t('cta_btn_start')}
        </button>
        <a
          href="#video"
          className={`w-full sm:w-auto px-8 py-4 bg-transparent font-bold rounded-xl border transition duration-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 text-center text-sm ${
            isDarkMode
              ? 'text-emerald-400 border-emerald-500/50 hover:border-emerald-400'
              : 'text-emerald-700 border-emerald-300'
          }`}
        >
          {t('cta_btn_demo')}
        </a>
      </div>
    </div>
  );
};

export default CTA;