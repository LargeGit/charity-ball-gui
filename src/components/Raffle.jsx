import React from "react";
import { Box, Text, useBreakpointValue  } from "@chakra-ui/react";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

import { SlideDownHeading, FadeInBoxLeft } from 'chakra-react-common/miscellaneous';


export default function Raffle (props) {

  return (
    
    <Box p='6' m='4' pl={[2,8]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>

      <SlideDownHeading>Raffle Prizes</SlideDownHeading>
      <FadeInBoxLeft>
      <Box p='6' m='4'>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel arcu erat. Quisque nec accumsan eros. Cras aliquam ut massa id congue.</Text>
        <Text>Duis commodo accumsan nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam consequat neque ut urna cursus tempor.</Text>
        <Text>Aenean ac lacus viverra ex facilisis commodo. Donec eleifend non eros et condimentum. Nullam at mauris vel nisi vulputate scelerisque. Sed vitae lectus convallis, ultricies odio convallis, porttitor erat.</Text>
        <Text>Nullam in ligula ex. Praesent convallis consequat neque ut porta. Sed quis mauris vitae turpis tincidunt fermentum et eu enim. Mauris aliquam eros varius, elementum est vitae, euismod nunc.</Text>
      </Box>
      </FadeInBoxLeft>
    </Box>

  )
};

