import React from "react";
import { Flex, Image, Box, Heading, useBreakpointValue  } from "@chakra-ui/react";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { SlideDownHeading, FadeInBoxRight, FadeInBoxLeft } from 'chakra-react-common/miscellaneous';
import { isTouchScreen } from 'js-common/constants';

import winkworth from '../img/WinkworthLogo.png';
import strackers from '../img/StrackersLogo.png';
import dyson from '../img/DysonLogo.png';
import wbmproperty from '../img/WbmpropertyLogo.png';
import ksf from '../img/ksfDyslexia.png';
import mmt from '../img/MmtLogo.png';
import optimum from '../img/optimum.png';
import bkPhotography from '../img/bkPhotography.jpeg';
import knead from '../img/kneadLogo.png';
import summerCafe from '../img/summerCafeLogo.png';
import thrings from '../img/thringsLogo.png';
import wicks from '../img/AndyWicksLogo.png';
import nimble from '../img/NimbleAndWildLogo.png';
import sisk from '../img/SiskLogo.png';
import osborne from '../img/SteveOsborneLogo.png';
import warings from '../img/WaringsLogo.png';

const myOpacity = (isTouchScreen) ? '1.0' : '0.5';


export default function Sponsors (props) {

  return (
    <Box py='6' m='4' px={[2,8]} maxWidth='1200px'>
      <SlideDownHeading pb={10} fontSize='2.5rem'>Event Sponsors</SlideDownHeading>
      <FadeInBoxRight>
        <Flex justifyContent='space-around' alignContent='center' w={'100%'} flexWrap='wrap'>
          <Box px={[4,8]}>
          <a href='https://www.thrings.com/' target='_blank' rel="noreferrer">
            <Image pt='8' w='160px' src={thrings} alt='thrings' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.winkworthfarm.com/' target='_blank' rel="noreferrer">
            <Image w='160px' src={winkworth} alt='Winkworth Farm' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://wbmproperty.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt={12} w='160px' src={wbmproperty} alt='wbm property' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.benkellyphotography.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt='8' w='200px' src={bkPhotography} alt='bk photo' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.johnsiskandson.com/' target='_blank' rel="noreferrer">
            <Image  pt='2' w='200px' src={sisk} alt='sisk' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://waringscatering.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt='2' w='200px' src={warings} alt='warings' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          


        </Flex>
      </FadeInBoxRight>

      <SlideDownHeading py={10} fontSize='2.5rem'>Table Sponsors</SlideDownHeading>
      
      <FadeInBoxLeft>
        <Flex justifyContent='space-around' alignContent='center' w={'100%'} flexWrap='wrap'>
        <Box px={[4,8]}>
            <a href='https://www.optimum-fitness.co.uk/' target='_blank' rel="noreferrer">
              <Image  pt={12} w='180px' src={optimum} alt='optimum' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
            </a> 
          </Box> 
          <Box px={[4,8]}>
            <a href='https://ksfconsulting.co.uk/' target='_blank' rel="noreferrer">
              <Image  pt={12} w='220px' src={ksf} alt='KSF' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
            </a> 
          </Box> 
          <Box px={[4,8]}>
            <a href='https://www.milesmorgantravel.co.uk/' target='_blank' rel="noreferrer">
              <Image  pt={12} w='200px' src={mmt} alt='MMT' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
            </a> 
          </Box> 
          <Box px={[4,8]}>
          <a href='https://www.strakers.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt={12} w='160px' src={strackers} alt='Strackers' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.facebook.com/summercafemalmesbury/' target='_blank' rel="noreferrer">
            <Image  pt={12} w='160px' src={summerCafe} alt='Summer Cafe' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.nimbleandwild.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt={12} w='160px' src={nimble} alt='Nimble' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.andywickslandscapes.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt={12} w='160px' src={wicks} alt='Wicks' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
          <Box px={[4,8]}>
          <a href='https://www.soconstruction.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt='8' w='160px' src={osborne} alt='osborne' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
        </Flex>
      </FadeInBoxLeft>

      <SlideDownHeading py={10} fontSize='2.5rem'>Raffle Sponsors</SlideDownHeading>
      
      <FadeInBoxRight>
        <Flex justifyContent='space-around' alignContent='center' w={'100%'} flexWrap='wrap'>
        <Box px={[4,8]}>
            <a href='https://www.jamesdysonfoundation.co.uk/' target='_blank' rel="noreferrer">
              <Image  w='180px' src={dyson} alt='Dyson' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
            </a> 
          </Box> 
          <Box px={[4,8]}>
          <a href='https://kneadbakery.co.uk/' target='_blank' rel="noreferrer">
            <Image  pt='2' w='150px' src={knead} alt='knead' opacity={myOpacity} _hover={{opacity: '1.0'}}/>
          </a> 
          </Box>
        </Flex>
      </FadeInBoxRight>
    </Box>
  )
};
