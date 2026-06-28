import React from 'react';
import ReactGA from 'react-ga4';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

// 🔥 Anzisha Google Analytics na Measurement ID yako
const TRACKING_ID = "G-3SQVTPS5HJ";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LandingPage />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;