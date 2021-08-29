<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";

=======
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Theme/theme";
>>>>>>> a17a543cd412ce27cc4cde0a396910aa4bac2e1a
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

<<<<<<< HEAD
// const config = {
//   initialColorMode: "light",
//   useSystemColorMode: false,
// };

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
=======
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
>>>>>>> a17a543cd412ce27cc4cde0a396910aa4bac2e1a
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
