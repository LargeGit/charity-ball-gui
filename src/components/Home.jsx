import React from "react";
import { Box, useBreakpointValue  } from "@chakra-ui/react";

import { Link } from "react-router-dom";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';
import plainBackground from '../img/PlainBackground.png';

import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';


export default function HomeOnBackground (props) {

  return (
    
    <Box w='100vw' h='100%'
      backgroundImage={plainBackground}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >

        <SlideDownHeading
          align='center'
          letterSpacing={'4px'}
          fontFamily='Oooh Baby' color='#FFF5EE' pt={12} px={12} fontSize={useBreakpointValue({base: '3.0rem', sm: '3.8rem', md: '5.8rem'})}
          textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'
        >
          Live Love<br/>& Sparkle
        </SlideDownHeading>
        <FadeInBoxRight
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' p='4' fontSize={['1.2rem', '1.6rem', '2.0rem']}
        >Charity Dinner</FadeInBoxRight>
        <FadeInBoxLeft
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='1' fontSize={['1.2rem', '1.6rem', '2.0rem']}
        >Featuring Live Music from Noughty Nineties</FadeInBoxLeft>
        <FadeInBoxRight
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='1' fontSize={['1.2rem', '1.6rem', '2.0rem']}
        >Winkworth Farm, Lea SN16 9NH</FadeInBoxRight>
        <FadeInBoxLeft
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='1' fontSize={['1.0rem', '1.3rem', '1.6rem']}
        >Saturday 7th October 2023</FadeInBoxLeft>
        <FadeInBoxRight
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='2' fontSize={['1.2rem', '1.6rem', '2.0rem']}
        >Tickets £75 per person</FadeInBoxRight>
        <FadeInBoxLeft
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='1' fontSize={['1.2rem', '1.6rem', '2.0rem']}
        >Includes Pink sparkling reception, 3 course meal and Live Band</FadeInBoxLeft>        
        <FadeInBoxRight
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt='1' fontSize={['1.0rem', '1.3rem', '1.6rem']}
        >Dress Code: Black Tie with a touch of sparkle</FadeInBoxRight>   

        <Link to='/tickets'>
        <FadeInBoxRight
          fontFamily='Libre Baskerville'
          align='center'
          color='pink.700' px='8' pt={16} fontSize={['1.0rem', '1.3rem', '1.6rem']}
        >
          Click here for tickets
        </FadeInBoxRight>  
        </Link> 

    </Box>

  )
};


export function Menu (props) {

  return (
    
    <Box w='100vw' h='100%'
      backgroundImage={plainBackground}
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
    >

        <SlideDownHeading
          align='center'
          letterSpacing={'4px'}
          fontFamily='Oooh Baby' color='#FFF5EE' pt={12} px={12} fontSize={useBreakpointValue({base: '3.0rem', sm: '3.8rem', md: '5.8rem'})}
          textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'
        >
          Menu
        </SlideDownHeading>
        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
        >
          Starters
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Gin and tonic cured salmon, pickled cucumber, lemon aioli<br/>
          or<br/>
          Cherry tomato tart tatin on baby leaf, herb and toasted seed salad
        </FadeInBoxLeft>

        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
        >
          Mains
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Slow cooked shin of beef, roasted baby onions, smoked bacon, beef reduction<br/>
          or<br/>
          Roasted red pepper filled with wild rice, ratatouille topped with brie and a puff pastry lid
        </FadeInBoxLeft>

        <FadeInBoxRight
          align='center'
          color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
          fontFamily='Oooh Baby'
          fontWeight='bold'
        >
          Desserts
        </FadeInBoxRight>
        <FadeInBoxLeft
          align='center'
          px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
        >
          Triple chocolate brownie <br/>
          Lemon posset and lavender shortbread  <br/>
          Eton Mess pots

        </FadeInBoxLeft>

    </Box>

  )
};



