import React, { useState } from "react";
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
  const { colorMode } = useColorMode();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <FormControl>
      <Flex
        direction="column"
        height="80vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading textAlign="center" size="lg" mb="5">
          Login
        </Heading>
        <Flex
          borderRadius="15px"
          direction="column"
          p={14}
          rounded={14}
          bgColor={colorMode === "light" ? "gray.100" : "gray.600"}
        >
          <Input
            placeholder="username"
            variant="outline"
            type="email"
            mb="4px"
            maxW="100%"
            />
            <InputGroup>
            <Input
              placeholder="********"
              variant="outline"
              type={showPassword ? "text" : "password"}
              mt="4px"
              maxW="100%"
            />
            <InputRightElement mt="1" width="4.5rem">
              <Button bgColor="green.200" h="1.75rem" size="sm" onClick={handleShowClick}>
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          <ButtonGroup justifyContent="center" m="2">
            <Button type="submit" colorScheme="linkedin">
              Login
            </Button>
            <Button type="reset" colorScheme="red">
              Clear
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default Login;
