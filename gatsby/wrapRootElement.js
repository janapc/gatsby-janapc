import React from "react";
import { ThemeColorProvider } from '../src/contexts/themeColor';

// export function wrapRootElement({ element }) {
//   return (
//     <ThemeProvider theme={light}>
//       <GlobalStyle />
//       <ThemeColorProvider element={element} />
//     </ThemeProvider>
//   );
// }

const Wrapper = ({ element }) => {
  return <ThemeColorProvider children={element} />;
};

export const wrapRootElement = Wrapper;
