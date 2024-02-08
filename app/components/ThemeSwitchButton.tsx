'use client'
import { Moon } from '@phosphor-icons/react';
import { Sun } from '@phosphor-icons/react/dist/ssr';
import { useState, useEffect } from 'react';

export function ThemeSwitchButton (){
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (event: any) => {
      setIsDarkMode(event.matches);
    };

    darkModeMediaQuery.addEventListener('change', updateTheme);
    updateTheme(darkModeMediaQuery);

    return () => {
      darkModeMediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = isDarkMode ? 'dark' : 'light';

    root.style.setProperty('--foreground-rgb', theme === 'dark' ? '255, 255, 255' : '0, 0, 0');
    root.style.setProperty('--background-start-rgb', theme === 'dark' ? '0, 0, 0' : '214, 219, 220');
    root.style.setProperty('--background-end-rgb', theme === 'dark' ? '0, 0, 0' : '255, 255, 255');
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      {isDarkMode ? <Sun size={24}/> : <Moon size={24} />}
    </button>
  );
};