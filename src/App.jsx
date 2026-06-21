import React from 'react';
import LandingPage from './pages/LandingPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

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