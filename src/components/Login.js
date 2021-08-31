import React from "react";
import { Flex, Input, useColorMode } from "@chakra-ui/react";

const Login = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        borderRadius="15px"
        direction="column"
        p={14}
        rounded={6}
        bgColor=
        {colorMode === "light" ? "gray.100" : "gray.600"}
      >
        <Input
          placeholder="username"
          variant="outline"
          type="email"
          mb="4px"
          maxW="100%"
        ></Input>
        <Input
          placeholder="password"
          variant="outline"
          type="Password"
          mt="4px"
          maxW="100%"
        ></Input>
      </Flex>
    </Flex>
  );
};

export default Login;
