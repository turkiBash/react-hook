import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
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
