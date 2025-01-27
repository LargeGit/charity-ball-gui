import React from "react";
import { AccordionRoot, AccordionItem, AccordionItemContent, AccordionItemTrigger  } from "./ui/accordion";

import { Box, useBreakpointValue } from "@chakra-ui/react";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { SlideDownHeading, FadeInBoxRight } from 'chakra-react-common/miscellaneous';
//import { FadeInBoxLeft } from 'chakra-react-common/miscellaneous';


export default function Faqs (props) {

    return (
        <Box p='6' pl={[2,8]} width={useBreakpointValue({ base: "100vw", sm: '95vw', md: "90vw", lg: '850px' })}>
        <SlideDownHeading>FAQs</SlideDownHeading>
        <FadeInBoxRight>
        <AccordionRoot p='8' m='2' allowToggle={true} allowMultiple={false}>
        {
            faqData.map((item, index) => {
            return (

                <AccordionItem key={index} >
                    <AccordionItemTrigger _expanded={{ bg: 'pink.100', fontWeight: 'bold'}} >
                        <Box as="span" flex='1' textAlign='left'  >
                        {item.title}
                        </Box>
                    </AccordionItemTrigger>
                    <AccordionItemContent pb='4'>
                    {item.text}
                    </AccordionItemContent>
                </AccordionItem>

            )
            })

        }
        </AccordionRoot>
        </FadeInBoxRight>
        </Box>
    )
};

const faqData = [
    {
        title: 'How do I buy tickets?',
        text: `Click on the 'ticket' menu item above to complete a booking form. Payment is then made through the JustGiving website`
    },
    {
        title: 'How to find the venue?',
        text: `Winkworth Farm is situated just two miles from the small market town of Malmesbury on the borders of Wiltshire and Gloucestershire.
        The Farm is accessed via a 3/4 mile long private drive from the village of Lea.
        The address is: Winkworth Farm, Lea, Malmesbury SN16 9NH.`
    },
    {
        title: 'What is the dress code?',
        text: `Black Tie with a touch of sparkle`
    },
    {
        title: 'How much are the tickets?',
        text: `Tickets are £75 per person. All profits go directly to our charities.`
    },
    {
        title: 'What is included in the price?',
        text: `Pink sparkling reception. 3 course meal. Live band. And a guaranteed evening of fun.`
    },
]