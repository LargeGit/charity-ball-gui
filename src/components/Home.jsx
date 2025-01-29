import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { Link } from "react-router-dom";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

//import portraitBackground from '../img/portraitBackground.jpg';
//import plainBackground from '../img/PlainBackground.png';

import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';

const responsiveHeaderFont = ['2.5rem', '3rem', '3.5rem', '4rem']
const responsiveBodyFont = ['1rem', '1.25rem', '1.5rem', '2.5rem']
const responsiveSubtextFont = ['.8rem', '1rem', '1.2rem', '1.8rem']

export const HomeOnBackground = (props) => {

    return (
        
        <Box
        m='4'
            backgroundImage='url("PlainBackground.png")'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >

            <SlideDownHeading
            textAlign='center'
            fontFamily='Oooh Baby' color='pink.600' pt={12} px={12} fontSize={responsiveHeaderFont}
            fontWeight='medium'
            textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'
            >
            Live Love & Sparkle
            </SlideDownHeading>
            <FadeInBoxRight
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' p='4' fontSize={responsiveBodyFont}
            >Charity Dinner</FadeInBoxRight>
            <FadeInBoxLeft
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='1' fontSize={responsiveSubtextFont}
            >Featuring Live Music: TBD</FadeInBoxLeft>
            <FadeInBoxRight
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='1' fontSize={responsiveSubtextFont}
            >Winkworth Farm, Lea SN16 9NH</FadeInBoxRight>
            <FadeInBoxLeft
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='1' fontSize={responsiveBodyFont}
            >Saturday 4th October 2025</FadeInBoxLeft>
            <FadeInBoxRight
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='2' fontSize={responsiveSubtextFont}
            >Tickets £75 per person</FadeInBoxRight>
            <FadeInBoxLeft
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='1' fontSize={responsiveSubtextFont}
            >Includes Pink sparkling reception, 3 course meal and Live Band</FadeInBoxLeft>        
            <FadeInBoxRight
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt='1' fontSize={responsiveSubtextFont}
            >Dress Code: Black Tie with a touch of sparkle</FadeInBoxRight>   

            <Link to='/tickets'>
            <FadeInBoxRight
            fontFamily='Libre Baskerville'
            textAlign='center'
            color='pink.700' px='4' pt={['2', '2', '4', '8']} pb='10' fontSize={responsiveSubtextFont}
            >
            Click here for tickets
            </FadeInBoxRight>  
            </Link> 
        </Box>

    )
};


export function Menu (props) {

    return (
        
        <Box
        m='4'
            backgroundImage='url("PlainBackground.png")'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
        >

            <SlideDownHeading
                textAlign='center'
                letterSpacing={'4px'}
                fontFamily='Oooh Baby' color='#FFF5EE' pt={12} px={12} fontSize={{base: '3.0rem', sm: '3.8rem', md: '5.8rem'}}
                textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'
            >
            Menu
            </SlideDownHeading>
            <FadeInBoxRight
                textAlign='center'
                color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
                fontFamily='Oooh Baby'
                fontWeight='bold'
            >
            Starters
            </FadeInBoxRight>
            <FadeInBoxLeft
            textAlign='center'
            px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
            >
            Gin and tonic cured salmon, pickled cucumber, lemon aioli<br/>
            or<br/>
            Cherry tomato tart tatin on baby leaf, herb and toasted seed salad
            </FadeInBoxLeft>

            <FadeInBoxRight
            textAlign='center'
            color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
            fontFamily='Oooh Baby'
            fontWeight='bold'
            >
            Mains
            </FadeInBoxRight>
            <FadeInBoxLeft
            textAlign='center'
            px='8' pt='1' fontSize={['1.0rem', '1.2rem', '1.4rem']}
            >
            Slow cooked shin of beef, roasted baby onions, smoked bacon, beef reduction<br/>
            or<br/>
            Roasted red pepper filled with wild rice, ratatouille topped with brie and a puff pastry lid
            </FadeInBoxLeft>

            <FadeInBoxRight
            textAlign='center'
            color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
            fontFamily='Oooh Baby'
            fontWeight='bold'
            >
            Desserts
            </FadeInBoxRight>
            <FadeInBoxLeft
            textAlign='center'
            px='8' pt='1' pb='8' fontSize={['1.0rem', '1.2rem', '1.4rem']}
            >
            Triple chocolate brownie <br/>
            Lemon posset and lavender shortbread  <br/>
            Eton Mess pots

            </FadeInBoxLeft>

        </Box>

    )
};



