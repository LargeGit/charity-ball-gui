import React from "react";
import { Box, useBreakpointValue  } from "@chakra-ui/react";

import { Link } from "react-router-dom";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';
import plainBackground from '../img/PlainBackground.png';

import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';


export default function Schedule (props) {

  return (
    
    <Box w='100vw' h='100%'
      backgroundImage={plainBackground}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >

        <SlideDownHeading
          align='center'
          letterSpacing={'4px'}
          fontFamily='Oooh Baby' color='#FFF5EE' pt={12} px={12} fontSize={useBreakpointValue({base: '2.5rem', sm: '3.0rem', md: '5.0rem'})}
          textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'
        >
          Schedule
        </SlideDownHeading>

        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
          pt='6' pb='0'
        >
          6:30pm
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Drinks Reception
        </FadeInBoxLeft>

        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
          pt='6' pb='0'
        >
          7:30pm
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Dinner
        </FadeInBoxLeft>

        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
          pt='6' pb='0'
        >
          9:00pm
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Raffle and Speech

        </FadeInBoxLeft>
        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
          pt='6' pb='0'
        >
          9:30pm
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Dancing

        </FadeInBoxLeft>
        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
          pt='6' pb='0'
        >
          midnight
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
          pb='8'
        >
          Close

        </FadeInBoxLeft>

    </Box>

  )
};



