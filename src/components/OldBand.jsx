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

        <SlideDownHeading>Noughty Nineties</SlideDownHeading>
        <FadeInBoxRight>
        <Text py='4'>
            Noughty 90s are the UK’s number 1 nineties and noughties party band. If you want a band that is sure to get the party started you need Noughty 90s. Their infectious energy is enough to get even the most stoic of guests moving. Playing the biggest club bangers from these two colossal decades you will barely have time to get your breath as they deliver banger after banger in a slick, hugely entertaining style.
        </Text>
        <Text pt='4' pb='8'>
            Noughty 90s have found the perfect balance between high level musicianship and showmanship and are a treat for the eyes and ears. Noughty 90s can offer up to one hour of each decade so you can choose between one spot of each decade or a combination of both decades
        </Text>
        </FadeInBoxRight>


        <FadeInBoxLeft>
            <a pb='4' href='https://apresskibands.com/portfolio-item/noughty-nineties-band/' target='_blank'>
                <Image w={useBreakpointValue({ base: '300px', md: '400px' })} src={noughtyNineties} alt='Coppa' filter={'grayscale(50%)'} _hover={{filter: 'none'}} />
            </a>
        </FadeInBoxLeft>


        <Box>
            <FadeInBoxRight>
            <iframe
                width={useBreakpointValue({ base: "300", sm: '440', md: "560" })}
                height={useBreakpointValue({ base: "168", sm: '247', md: "315" })}
                src="https://www.youtube.com/embed/cg4Jb4EhAYg"
                title="Noughty Nineties - Après Ski Bands"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
            </FadeInBoxRight>
        </Box>
        
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
