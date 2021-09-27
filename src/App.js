import React, { useState } from "react";
import { logInValidation } from "./Utilities/Validation";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

const App = () => {

  

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
            {/* {logInValidation ? <Posts/> : ''} */}
          </Route>
          <Route path="/LoginPage">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

export default App;
