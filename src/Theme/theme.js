// theme.js
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode("#FFF", "#000")(props),
        color: mode("#000", "#fff")(props),
      },
      button: {
        color:mode( "teal.500", "yellow")(props),
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
    // styles for the `a`
  },
});

export default theme;
