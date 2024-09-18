// src/App.jsx
import React, { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './config/themes';
import Sidebar from './components/sidebar/Sidebar';
import Rightbar from './components/rightbar/Rightbar';
import Header from './components/header/Header';
import './index.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={`flex ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        {/* Sidebar */}
        <Sidebar darkMode={darkMode} />

        <div className="flex-1">
          <Header toggleTheme={toggleTheme} darkMode={darkMode} />
        </div>
        <Rightbar darkMode={darkMode} />
      </div>
    </ThemeProvider>
  );
};

export default App;
