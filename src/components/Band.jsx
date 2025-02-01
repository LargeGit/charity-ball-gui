import React from "react";
import { Box, Text, useBreakpointValue, Image  } from "@chakra-ui/react";
//import { Box, Link, Stack, Flex, Text  } from "@chakra-ui/react";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';
import noughtyNineties from '../img/NoughtyNineties.jpg';



export default function Band (props) {

  return (

    <Box py='6' my='4' px={[2,8]} mx={[2,4]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>

        <SlideDownHeading>Band Details</SlideDownHeading>
        <FadeInBoxRight>
        <Text py='4'>
            To be confirmed
        </Text>
        </FadeInBoxRight>
        
    </Box>
  )

};

/*
        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BRNToXQ3zt8" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
        </iframe>  
*/
