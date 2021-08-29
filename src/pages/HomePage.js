import { Heading } from "@chakra-ui/layout";
import React from "react";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";

const HomePage = () => {
  
  return (
    <div>
      <Navbar />
      <Heading as="h1">Home Page</Heading>
      <Posts />
    </div>
  );
};

export default HomePage;
