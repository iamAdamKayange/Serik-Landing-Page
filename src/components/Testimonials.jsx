import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  const testimonials = [
    { 
      name: "Aika M.", 
      role: t('testimonials_role1'), // 🔥 Role imetafsiriwa
      text: t('testimonial1_text'), 
      rating: 5, 
      initials: "AM" 
    },
    { 
      name: "Juma S.", 
      role: t('testimonials_role2'), // 🔥 Role imetafsiriwa
      text: t('testimonial2_text'), 
      rating: 5, 
      initials: "JS" 
    },
    { 
      name: "Mama Masawe", 
      role: t('testimonials_role3'), // 🔥 Role imetafsiriwa
      text: t('testimonial3_text'), 
      rating: 5, 
      initials: "MM" 
    }
  ];

  return (
    <section id="maoni" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-darkBg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
            isDarkMode
              ? 'text-emerald-400 bg-emerald-900/60'
              : 'text-emerald-700 bg-emerald-100/60'
          }`}>
            {t('testimonials_title')}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            {t('testimonials_subtitle')}
          </h2>
          <p className={`mt-3 text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-650'
          }`}>
            {t('testimonials_desc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between relative transition-colors duration-300 ${
              isDarkMode
                ? 'bg-darkSurface border-darkBorder'
                : 'bg-slate-50 border-slate-200/50'
            }`}>
              <div>
                <div className="flex text-amber-400 mb-4 text-sm">{"★".repeat(t.rating)}</div>
                <p className={`text-sm sm:text-base leading-relaxed italic ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{t.text}"
                </p>
              </div>
              <div className={`mt-6 pt-5 border-t flex items-center gap-3 ${
                isDarkMode ? 'border-darkBorder' : 'border-slate-200'
              }`}>
                <div className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-sm ${
                  isDarkMode
                    ? 'bg-emerald-800 text-emerald-300'
                    : 'bg-emerald-950 text-emerald-400'
                }`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className={`font-bold text-sm ${
                    isDarkMode ? 'text-white' : 'text-slate-950'
                  }`}>{t.name}</h4>
                  <p className={`text-xs font-medium ${
                    isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
                  }`}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;