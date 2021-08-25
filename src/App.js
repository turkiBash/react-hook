import { Container } from "@chakra-ui/layout";
import React from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Container centerContent color="brand">
      <HomePage />
    </Container>
  );
};

export default App;
