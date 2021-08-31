import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoLanguageOutline } from "react-icons/all";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      direction="row"
      bgColor="teal.500"
      width="100%"
      justifyContent="flex-start"
      alignContent="space-between"
    >
      <Flex m="1" gridGap="5px">
        <Button variant="ghost">
          <Link to="/LoginPage">Sign In</Link>
        </Button>

        <Button variant="outline">Sign Up</Button>
        <Menu>
          <MenuButton as={Button} variant="outline" size="md">
            {colorMode === "light" ? (
              <IoLanguageOutline bgColor="black" />
            ) : (
              <IoLanguageOutline color="white" />
            )}
            {/* <IoLanguageOutline/> */}
          </MenuButton>
          <MenuList>
            {/* MenuItems are not rendered unless Menu is open */}
            <MenuItem>العربية</MenuItem>
            <MenuItem>English</MenuItem>
            <MenuItem>Spain</MenuItem>
          </MenuList>
        </Menu>
        {/* <Button variant="outline">Language</Button> */}
        <Button variant="ghost" size="md" onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
