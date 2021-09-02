import { Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Posts from "../components/Posts";
import LoginPage from "./LoginPage";

const HomePage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Heading>Home Page</Heading>
      <LoginPage />
    </>
  );
};

export default HomePage;
