import GlobalStyles from "./components/styles/Global.js";
import SizeParams from "./components/SizeParams.js";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/styles/Theme.js";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode === true ? darkTheme : lightTheme}>
      <GlobalStyles />
      <SizeParams darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}

export default App;
