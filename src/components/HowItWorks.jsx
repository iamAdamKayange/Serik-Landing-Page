import React from 'react';
import demoVideo from '../assets/videos/demo.mp4';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { isDarkMode } = useTheme();
  const { t } = useLanguage();

  const steps = [
    { num: "1", title: t('how_step1_title'), desc: t('how_step1_desc') },
    { num: "2", title: t('how_step2_title'), desc: t('how_step2_desc') },
    { num: "3", title: t('how_step3_title'), desc: t('how_step3_desc') }
  ];

  return (
    <section id="jinsiyakutumia" className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-darkBg' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase bg-emerald-100/60 dark:bg-emerald-900/60 px-3 py-1.5 rounded-full">
            {t('how_title')}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            {t('how_title')}
          </h2>
          <p className={`mt-3 text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-650'
          }`}>
            {t('how_subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-5 relative">
                {idx < 2 && <div className={`absolute top-12 left-6 w-0.5 h-16 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-slate-200'
                } hidden lg:block`}></div>}
                <div className={`w-12 h-12 rounded-xl bg-emerald-950 ${
                  isDarkMode ? 'text-emerald-400' : 'text-emerald-400'
                } flex items-center justify-center font-black text-lg shadow-md shrink-0`}>
                  {step.num}
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${
                    isDarkMode ? 'text-white' : 'text-slate-950'
                  }`}>{step.title}</h3>
                  <p className={`text-sm mt-1.5 leading-relaxed ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-7 w-full">
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 aspect-video group ${
              isDarkMode 
                ? 'bg-gray-900 border-gray-700' 
                : 'bg-black border-emerald-900/20'
            }`}>
              <video
                className="w-full h-full object-contain"
                controls
                playsInline
                poster="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80"
                src={demoVideo}
                preload="auto"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;