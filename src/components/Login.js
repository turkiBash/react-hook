import React from "react";
import {
  Flex,
  Input,
  useColorMode,
  FormControl,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";

const Login = () => {
  const { colorMode } = useColorMode();
  return (
    <FormControl>
      <Flex
        direction="column"
        height="80vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          borderRadius="15px"
          direction="column"
          p={14}
          rounded={14}
          bgColor={colorMode === "light" ? "gray.100" : "gray.600"}
        >
        <Heading textAlign="center" size="lg" mb="5">Login</Heading>
          <Input
            placeholder="username"
            variant="outline"
            type="email"
            mb="4px"
            maxW="100%"
          ></Input>
          <Input
            placeholder="********"
            variant="outline"
            type="Password"
            mt="4px"
            maxW="100%"
          ></Input>
          <ButtonGroup justifyContent="center" m="2">
            <Button type="submit" colorScheme="linkedin">Login</Button>
            <Button type="reset" colorScheme="red">Clear</Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </FormControl>
  );
};

export default Login;
