import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import { useTheme } from '../context/ThemeContext';

const LandingPage = () => {
  const [isSajiliModalOpen, setIsSajiliModalOpen] = useState(false);
  const [isMwanafunziModalOpen, setIsMwanafunziModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const handleAnzaClick = () => {
    console.log("✅ 'Anza Sasa' kimebonyezwa!");
    setIsMwanafunziModalOpen(true);
  };

  // Rangi kulingana na mode
  const bgColor = isDarkMode ? 'bg-darkBg' : 'bg-slate-50';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const subtextColor = isDarkMode ? 'text-gray-300' : 'text-gray-650';

  return (
    <div className={`${bgColor} ${textColor} font-sans transition-colors duration-300`}>
      <Navbar onAnzaClick={handleAnzaClick} />
      
      <Hero 
        onTafutaClick={() => {
          console.log("✅ 'Tafuta Getto Sasa' kimebonyezwa!");
          setIsMwanafunziModalOpen(true);
        }}
        onSajiliClick={() => {
          console.log("✅ 'Sajili Nyumba Yako' kimebonyezwa!");
          setIsSajiliModalOpen(true);
        }}
      />
      
      {/* Q&A Section */}
      <section className={`py-20 px-4 sm:px-6 lg:px-8 ${bgColor} ${textColor}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-wider uppercase bg-emerald-100/60 dark:bg-emerald-900/60 px-3 py-1.5 rounded-full">
              Maswali na Ufafanuzi
            </span>
            <h2 className={`text-3xl sm:text-4xl font-extrabold mt-4 tracking-tight ${textColor}`}>
              Una Maswali? SERIK Ina Majibu.
            </h2>
            <p className={`mt-3 text-base ${subtextColor}`}>
              Tunajua changamoto unazopitia mtaani. Hivi ndivyo tunavyokurudishia amani yako ya akili.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { q: "Je, umechoka kuzurura juani kutafuta nyumba ya kupanga?", a: "Ukiwa na SERIK, unapata kuchagua chumba ukipendacho kutoka miongoni mwa maelfu ya nyumba kiganjani mwako." },
              { q: "Je, hutaki kutapeliwa na madalali wasio waaminifu?", a: "Ukiwa na SERIK, unazungumza moja kwa moja na mwenye nyumba aliyeidhinishwa bila usumbufu wa mtu wa kati." },
              { q: "Je, unaogopa kuishi mbali na huduma za msingi au maeneo yasiyo salama?", a: "Ukiwa na SERIK, unaona kila kitu mapema—umbali wa kutoka chuoni kwako pamoja na huduma zote za karibu." },
              { q: "Je, umechoka kuona vyumba vyako vinakaa wazi bila wapangaji kila msimu wa chuo?", a: "Ukiwa na SERIK, unafikia maelfu ya wanafunzi kwa wakati mmoja na kujaza nyumba yako mapema bila kutegemea madalali." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-darkSurface rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-darkBorder transition duration-200 hover:shadow-md">
                <div className="p-5 sm:px-6 flex items-start gap-3.5 border-b border-slate-100 dark:border-darkBorder">
                  <span className="w-7 h-7 rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-black text-sm shrink-0">Q</span>
                  <h3 className={`font-bold text-base sm:text-lg ${textColor}`}>{item.q}</h3>
                </div>
                <div className="bg-gradient-to-r from-emerald-950 to-emerald-900 p-5 sm:px-6 text-white flex items-start gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-emerald-800 text-emerald-300 flex items-center justify-center font-black text-sm shrink-0">A</span>
                  <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed"><strong className="text-emerald-400 font-bold">SERIK</strong> {item.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm font-semibold text-emerald-800/80 dark:text-emerald-400/80 tracking-wide italic">
              "Ndoto za kijana huanzia getto, na sisi tupo pamoja nawe kutimiza ndoto zako."
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Features />
      <Testimonials />
      
      <CTA onAnzaClick={handleAnzaClick} />
      
      <Footer />

      {/* Modal ya Sajili */}
      <Modal
        isOpen={isSajiliModalOpen}
        onClose={() => setIsSajiliModalOpen(false)}
        title="Usajili wa Nyumba"
        subtitle="Miliki Mfumo Wako"
        footer={
          <button 
            onClick={() => setIsSajiliModalOpen(false)} 
            className="w-full py-2.5 bg-slate-200 dark:bg-gray-700 hover:bg-slate-300 dark:hover:bg-gray-600 text-slate-800 dark:text-gray-200 text-sm font-bold rounded-xl transition"
          >
            Funga Dirisha
          </button>
        }
      >
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Ili kusajili nyumba au hosteli yako kwenye mfumo wa SERIK, tafadhali wasiliana na timu yetu ya usaidizi moja kwa moja:
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-100 dark:border-emerald-800 group">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">Piga au WhatsApp</span>
          <a href="tel:+255616294403" className="text-lg font-black text-emerald-950 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition block">
            +255 616 294 403
          </a>
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 font-medium pt-2">
          <p className="text-slate-800 dark:text-gray-200 font-semibold">SERIK, Makao Makuu</p>
          <p className="mt-0.5">Dodoma, Tanzania</p>
        </div>
      </Modal>

      {/* Modal ya Mwanafunzi */}
      <Modal
        isOpen={isMwanafunziModalOpen}
        onClose={() => setIsMwanafunziModalOpen(false)}
        title="Karibu SERIK Mwanachuo!"
        subtitle="Mzigo Unajipika! 🚀"
        footer={
          <button 
            onClick={() => setIsMwanafunziModalOpen(false)} 
            className="w-full py-2.5 bg-emerald-950 hover:bg-emerald-900 text-emerald-400 text-sm font-bold rounded-xl transition shadow-md"
          >
            Inapendeza, Nitasubiri! 🙌
          </button>
        }
      >
        <p className="text-base font-bold text-slate-900 dark:text-white">
          Gheto Safi Ndani ya Dakika Chache? Tunakuja Kusafisha Mtaa!
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          Tunakamilisha hatua za mwisho za usajili wa magheto na hosteli kali zaidi mjini ili kukuondolea stress za madalali. 
        </p>
        <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-xl border border-emerald-100/80 dark:border-emerald-800">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 block mb-1">Mchongo Unakuwa Live</span>
          <span className="text-xl font-black text-emerald-950 dark:text-emerald-400 block">
            31 August 2026
          </span>
        </div>
        <p className="text-xs text-gray-400 dark:text-gray-500 italic pt-1">
          "Kaa mkao wa kula, maandalizi ya chuo msimu huu yatakuwa burudani sana!"
        </p>
      </Modal>
    </div>
  );
};

export default LandingPage;