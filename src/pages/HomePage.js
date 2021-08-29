import { Heading } from "@chakra-ui/layout";
import React from "react";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";

const HomePage = () => {
  
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
=======
    <>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Button>show more</Button>
>>>>>>> a17a543cd412ce27cc4cde0a396910aa4bac2e1a
      <Heading as="h1">Home Page</Heading>
      <Posts />
    </div>
  );
};

export default HomePage;
