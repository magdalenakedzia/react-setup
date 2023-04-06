import React, { useState } from 'react';

type TThemeProviderProps = {
  children: React.ReactNode;
};

interface IThemeContext {
  dark: boolean;
  toggleDark: () => void;
}
const defaultState = {
  dark: false,
  toggleDark: () => { }
};

export const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => {
    setDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
