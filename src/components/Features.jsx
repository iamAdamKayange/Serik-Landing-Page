import React from 'react';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/></svg>,
    title: "Filter za Kisasa",
    desc: "Chuja mageto kulingana na bajeti yako, umbali kutoka chuoni, na sifa unazozitaka."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>,
    title: "Uhakiki wa Picha",
    desc: "Picha zote ni halisi na zimekaguliwa na timu yetu kabla ya kuwekwa kwenye app."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
    title: "Haraka & Rahisi",
    desc: "Mfumo unafunguka kwa kasi sana hata kwenye mtandao hafifu, ukiwa na hatua chache."
  },
  {
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>,
    title: "Mawasiliano ya Direct",
    desc: "Ungana na wamiliki halisi wa nyumba waliosajiliwa. Hakuna urasimu wala madalali."
  },
];

const Features = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDarkMode ? 'bg-darkBg' : 'bg-slate-50'
    }`} id="vipengele">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
            isDarkMode
              ? 'text-emerald-400 bg-emerald-900/60'
              : 'text-emerald-700 bg-emerald-100/60'
          }`}>
            Kwanini Utuchague?
          </span>
          <h2 className={`text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight ${
            isDarkMode ? 'text-white' : 'text-slate-950'
          }`}>
            Sifa Zinazofanya SERIK Kuwa Tofauti
          </h2>
          <p className={`mt-3 text-base ${
            isDarkMode ? 'text-gray-300' : 'text-gray-650'
          }`}>
            Tumeboresha kila hatua ya utafutaji wa nyumba ili kukupa uzoefu wa kisasa na wa uhakika zaidi.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md group ${
                isDarkMode
                  ? 'bg-darkSurface border-darkBorder hover:border-emerald-500/40'
                  : 'bg-white border-slate-200 hover:border-emerald-600/40'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition duration-300 ${
                isDarkMode
                  ? 'bg-emerald-900/30 text-emerald-400 group-hover:bg-emerald-800 group-hover:text-emerald-300'
                  : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-950 group-hover:text-emerald-400'
              }`}>
                {feat.icon}
              </div>
              <h3 className={`text-lg font-bold transition duration-200 ${
                isDarkMode
                  ? 'text-white group-hover:text-emerald-400'
                  : 'text-slate-950 group-hover:text-emerald-800'
              }`}>
                {feat.title}
              </h3>
              <p className={`text-sm mt-2.5 leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-650'
              }`}>
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;