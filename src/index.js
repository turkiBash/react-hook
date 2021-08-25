import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import theme from "./Theme/theme";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const color = extendTheme({
  config,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} darkMode={color.config}>
      <ColorModeScript initialColorMode={color.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
