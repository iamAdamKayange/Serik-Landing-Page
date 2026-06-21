import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Modal = ({ isOpen, onClose, title, subtitle, children, footer }) => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={`bg-white dark:bg-darkSurface rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-slate-100 dark:border-darkBorder transform scale-100 transition-transform duration-300`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-6 text-center relative">
          {title && (
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-900/50 px-3 py-1 rounded-full">
              {typeof title === 'string' ? t(title) || title : title}
            </span>
          )}
          {subtitle && (
            <h3 className="text-xl font-black text-white mt-3">
              {typeof subtitle === 'string' ? t(subtitle) || subtitle : subtitle}
            </h3>
          )}
        </div>

        {/* Body */}
        <div className="p-6 text-center space-y-4">
          {children}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex justify-center ${
          isDarkMode 
            ? 'bg-darkSurface border-darkBorder' 
            : 'bg-slate-50 border-slate-100'
        }`}>
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;