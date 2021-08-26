import { Heading } from "@chakra-ui/layout";
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import Posts from "../components/Posts";

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Button>show more</Button>
      <Heading as="h1">Home Page</Heading>
      <Posts />
    </>
  );
};

export default HomePage;
