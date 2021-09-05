import { Heading } from "@chakra-ui/react";
import React from "react";
import Posts from "../components/Posts";

const HomePage = () => {

  let getLocalaStorage = () => {
   const datas = JSON.parse(localStorage.getItem("data"))
   // const isLoggedIn = getLocalaStorage["isLoggedIn"]
   console.log(datas)
  }
  
  return (
    <>
      <Heading>Home Page</Heading>
       <Posts />
    </>
  );
};

export default HomePage;
