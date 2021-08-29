<<<<<<< HEAD
import { mode } from "@chakra-ui/theme-tools"

const Theme = {
  global: (props) => ({
    "body": {
      fontFamily: "body",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      lineHeight: "base"
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    }
  })
}

export default Theme
=======
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
>>>>>>> a17a543cd412ce27cc4cde0a396910aa4bac2e1a
