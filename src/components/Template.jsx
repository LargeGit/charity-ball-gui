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


export const Template = ({content}) =>{

    return (
        <Box
            m='10'
            _last={{pb:'10'}}
            backgroundImage='url("PlainBackground.png")' backgroundRepeat='no-repeat' backgroundSize='cover'
            shadow='0 4px 8px 0 rgba(0, 0 ,0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>
            {content.map( (item, index) => (
                <Content key={index} item={item}/>
            ))}
        </Box>
    )
}


const Content = ({item}) => {

    return (
        <>
        <Box
            textDecoration='none'
            as={Link}
            to={item.link ?? '#'}
        >
            {item.type === 'title' && (
                <SlideDownHeading
                    textAlign='center'
                    fontFamily='Oooh Baby' color='pink.600' pt={12} px={12} fontSize={responsiveHeaderFont}
                    fontWeight='medium'
                    textShadow='4px 4px 10px rgba(170, 51, 106, .4), -4px -4px 10px rgba(170, 51, 106, .4), 4px -4px 10px rgba(170, 51, 106, 0.4), -4px 4px 10px rgba(170, 51, 106, 0.4)'>
                    {item.body}
                </SlideDownHeading>
            )}
        </Box>
        <Box
            textDecoration='none'
            as={Link}
            to={item.link ?? '#'}
        >
            {item.type === 'text' && (
                <FadeInBoxRight
                    fontFamily='Libre Baskerville'
                    textAlign='center'
                    color='pink.700' p='4' fontSize={responsiveBodyFont}
                    >
                    {item.body}
                </FadeInBoxRight>
            )}
        </Box>
        <Box
            textDecoration='none'
            as={Link}
            to={item.link ?? '#'}
        >
            {item.type === 'subtext' && (
                <FadeInBoxLeft
                    fontFamily='Libre Baskerville'
                    textAlign='center'
                    color='pink.700' px='4' pt='1' fontSize={responsiveSubtextFont}
                >
                    {item.body}
                </FadeInBoxLeft>
            )}
        </Box>
        <Box
            textDecoration='none'
            as={Link}
            to={item.link ?? '#'}
        >
            {item.type === 'heading' && (
                <FadeInBoxRight
                textAlign='center'
                color='pink.700' p='4' fontSize={['1.4rem', '2.0rem', '2.0rem']}
                fontFamily='Oooh Baby'
                fontWeight='bold'
                >
                {item.body}
            </FadeInBoxRight>
            )}
        </Box>
        </>
    )
}




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



