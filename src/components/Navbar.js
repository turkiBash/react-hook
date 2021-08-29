import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      direction="row"
      bgColor="teal.500"
      width="100%"
      justifyContent="flex-start"
      alignContent="space-between"
    >
      <Flex m="1" gridGap="5px">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
        <Button>Language</Button>
        <Button size="sm" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
