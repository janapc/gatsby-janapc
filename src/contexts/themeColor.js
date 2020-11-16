import React, { createContext, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-styles";

import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

const ThemeColorContext = createContext({});

export const ThemeColorProvider = ({ children }) => {
  const [themeColor, setThemeColor] = useState(false);

  return (
    <ThemeColorContext.Provider
      value={{ themeColor, changeTheme: () => setThemeColor(!themeColor) }}
    >
      <ThemeProvider theme={themeColor ? dark : light}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeColorContext.Provider>
  );
};

export function useThemeColor() {
  const context = useContext(ThemeColorContext);

  return context;
}
