import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

const App = () => {
  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
  localStorage.setItem("isLoggedIn", isLoggedIn ? isLoggedIn : false )
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
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
