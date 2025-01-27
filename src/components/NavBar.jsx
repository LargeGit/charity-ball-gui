import React from "react";

import { Box, Text, Stack, Flex } from "@chakra-ui/react";
import { Icon, Button } from "@chakra-ui/react";
//import { Image } from "@chakra-ui/react";

import { FaXmark, FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";

//import { FaBeer, FaAngry } from 'react-icons/fa';

import { GoHome } from 'react-icons/go';
import { BsPerson, BsPersonLinesFill } from 'react-icons/bs';

//import LLSLogo from '../img/LLS_logo.jpg';

import { defaultUser } from 'js-common/constants'

function SignIn() {
  return <Icon as={BsPerson} />
};

function SignedIn() {
  return <Icon as={BsPersonLinesFill} />
};

function Home() {
  return <Icon as={GoHome} />
};


export default function NavBar( { currentUser=defaultUser }, props ) {

  const [isOpen, setIsOpen] = React.useState(true)
  
  const toggle = () => setIsOpen(!isOpen)


  return (
    <NavBarContainer {...props}>
      <Logo w="100px" />
      <MenuToggleButton toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} currentUser={currentUser} />
    </NavBarContainer>
  )
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      pt='8'
      pr='8'
      pl='8'
      pb='4'
      {...props}
    >
      {children}
    </Flex>
  )
}

const Logo = (props) => {
  return (
    <Box {...props}>
      <Link to='home'><Home boxSize='8' /></Link>
    </Box>
  )
}


const MenuToggleButton = ({ toggle, isOpen }) => {
    return (
      <Box display={{ base: "block", md: "none" }} onClick={toggle}>
        {isOpen ? <FaXmark boxSize='4'/> : <FaBars  boxSize='5'/>}
      </Box>
    )
  }



const MenuItem = ({ children, isLast, to = "/", ...rest }) => {

  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  )
};



const MenuLinks = ({isOpen, currentUser}) => {

  return (null)



};

/*
return (

  <Box
    display={{ base: isOpen ? "block" : "none", md: "block" }}
    flexBasis={{ base: "100%", md: "auto" }} 
  >
    <Stack
      spacing='8'
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <MenuItem to="/story">my story</MenuItem>
      <MenuItem to="/register">register</MenuItem>
      <MenuItem to="/raffle">raffle</MenuItem>
      <MenuItem to="/sponsors">sponsors</MenuItem>
      <MenuItem to="/faq">FAQ</MenuItem>
      {(currentUser.role !== '__admin_role__') ? (
        <MenuItem to="/emails"><SignedIn /></MenuItem>
      ) : (
        <MenuItem to="/logon"><SignIn /></MenuItem>
      )}

    </Stack>
  </Box>
)
/*