import React, { useState } from "react";
import {
  emailValidation,
  passwordValidation,
  logInValidation
} from "../Utilities/Validation";
import {
  Flex,
  Input,
  useColorMode,
  FormControl,
  Button,
  ButtonGroup,
  Heading,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { colorMode } = useColorMode();

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };

  const resetHandler = () => {
    setPassword("");
    setEmail("");
  };

  const submitHandler = (e) => {
    // let isLoggedIn = false;
    e.preventDefault();
    // setIsLoggedIn(false);
    if (emailValidation(email) && passwordValidation(password)) {
      window.location.pathname = "/";
      return logInValidation(!isLoggedIn)
      
    }
  };

  return (
    <Flex
      direction="column"
      height="80vh"
      justifyContent="center"
      alignItems="center"
    >
      <Heading textAlign="center" size="lg" mb="5">
        Login
      </Heading>
      <form onSubmit={submitHandler}>
        <FormControl isRequired="true">
          <Flex
            borderRadius="15px"
            direction="column"
            p={14}
            rounded={14}
            bgColor={colorMode === "light" ? "gray.100" : "gray.600"}
          >
            <Input
              placeholder="email"
              variant="outline"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              mb="4px"
              maxW="100%"
            />
            <InputGroup>
              <Input
                placeholder="********"
                variant="outline"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                mt="4px"
                maxW="100%"
              />

              <InputRightElement mt="1" width="4.5rem">
                <Button
                  bgColor="green.200"
                  h="1.75rem"
                  size="sm"
                  onClick={handleShowClick}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>

            <ButtonGroup justifyContent="center" m="2">
              <Button
                onClick={() => setIsLoggedIn(true)}
                type="submit"
                colorScheme="linkedin"
              >
                Login
              </Button>
              <Button onClick={resetHandler} type="reset" colorScheme="red">
                Clear
              </Button>
            </ButtonGroup>
          </Flex>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Login;
