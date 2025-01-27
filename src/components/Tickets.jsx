import React, { useEffect } from "react";
import { FormControl, FormHelperText, FormErrorMessage, HStack,
  Image, Button, Box, Heading, Checkbox, VStack,
  useBreakpointValue } from "@chakra-ui/react";

import { NumberInputRoot, NumberInputLabel, NumberInputField } from "./ui/number-input";  
import { Menu, MenuList, MenuItem  } from "@chakra-ui/react";  
import { Button } from "@chakra-ui/react"; 

import { FaChevronDown } from "react-icons/fa";


import { FormLabel as ChakraFormLabel } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { Text as ChakraText } from "@chakra-ui/react";

import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

//import { restRequest } from 'js-common/utils'
import fullJustGiving from '../img/fullJustGiving.png';
import { POST, BASE_URL, TICKET_PRICE } from "js-common/constants";


const ChakraButton = (props) => {
  return (
    <Button
      border='solid 1px pink'
      fontWeight='normal'
      fontSize={['.7rem', '.8rem']}
      bg='white'
      width='30%'
      as={Button}
      rightIcon={<FaChevronDown />}
    >
      {props.children}
    </Button>
  )  
}

const Text = (props) => {
  return (
    <ChakraText
      fontSize={['.8rem', '1rem']}
      p='4'
      {...props}
      >
      {props.children}
    </ChakraText>
  )
};

const Input = (props) => {
  return (
    <ChakraInput
      fontSize={['.8rem', '1rem']}
      maxW={'400px'}
      {...props}
      >
      {props.children}
    </ChakraInput>
  )
};

const FormLabel = (props) => {
  return (
    <ChakraFormLabel
      pt='2'
      fontSize={['.8rem', '1rem']} 
      {...props}
      >
      {props.children}
    </ChakraFormLabel>
  )
};

const Heading1 = (props) => {
  return (
    <Heading
      color='pink.600'
      size={['md', 'lg']}
      {...props}
      >
      {props.children}
    </Heading>
  )
};

const Heading2 = (props) => {
  return (
    <Heading
      pt='6'
      color='pink.500'
      size={['sm', 'md']}
      {...props}
      >
      {props.children}
    </Heading>
  )
};


const choices = {
  starter: [
    'cured salmon',
    'tomato tart',
  ],
  main: [
    'slow cook beef',
    'roasted peppers',
  ],
  dessert: [
    'sharing platter',
    'vegan option',
  ],
}

const choiceKeys = ['starter', 'main', 'dessert'];


export default function Tickets (props) {

  
    const [state, setNotification] = useToastHook();

    

    const defaultBookingForm = {
        host_name : '',
        host_email:  '',
        host_phone: '',
        host_address:  '',
        number_of_tickets: 4,
        paid: false,
        comment: '',
    };

    const defaultGuestArray = [
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter_choice: 'starter', main_choice: 'main', dessert_choice: 'dessert',},
    ]
    
    const [bookingForm, setBookingForm] = React.useState(defaultBookingForm)
    const [guestArray, setGuestArray] = React.useState(defaultGuestArray)

    const defaultBookingFormError = {
        host_name : false,
        host_email:  false,
        host_phone: false,
        host_address:  false,
    };

    const [bookingFormError, setBookingFormError] = React.useState(defaultBookingFormError)

    const handleInputChange = (e) => {
        setBookingForm({...bookingForm, [e.target.name]: e.target.value})
        setBookingFormError(defaultBookingFormError)
    ;}
    
    const onNumberOfTicketsChange = (valueAsNumber) => {
        setBookingForm({...bookingForm, number_of_tickets: valueAsNumber})
    }

    const handleSubmit = () => {

        var isOverallError = false;
        var tempBookingFormError = {
        host_name : false,
        host_email:  false,
        host_phone: false,
        host_address:  false,
        };

        for (var field in bookingFormError) {
        if (bookingForm[field] === '') {
            tempBookingFormError[field] = true
            isOverallError = true;
        }
        }

        if (isOverallError) {
        setBookingFormError(tempBookingFormError)
        return
        };

        setBookingFormError(defaultBookingFormError)

        var tempData = guestArray;
        
        tempData.forEach((item) => {
        item.host_name = bookingForm.host_name;
        item.host_email = bookingForm.host_email;
        item.host_phone = bookingForm.host_phone;
        item.host_address = bookingForm.host_address;
        item.number_of_tickets = bookingForm.number_of_tickets;
        item.paid = bookingForm.paid;
        item.comment = bookingForm.comment;
        })
        
        tempData = tempData.slice(0, bookingForm.number_of_tickets);

        // setNotification( { text: JSON.stringify(tempData), level: "success" } );

        const fetchData = {
        method: POST,
        body: JSON.stringify(tempData),
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json',
        })
        }

        var wasSuccessful = true;

        fetch(`${BASE_URL}booking/`, fetchData)
        
        .then( response=>{
            wasSuccessful = response.ok;
            return ( response.json() )
        })

        .then( data=>{
            
            if (wasSuccessful) {
            setNotification({ text: "Thank you for your booking. Gemma will be in touch.", level: "success" });
            setBookingForm(defaultBookingForm);
            setGuestArray(defaultGuestArray);
            } else {
            setNotification({ text: `${data.detail}`, level: "warning" });
            }
        })
        
        .catch((error) => {
            setNotification({ text: `Oops, something went wrong! ${error}`, level: "error" });
        })

    };

    return ( 
        <>
        <Box pt='8' pl={[2,8]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>

        <Box>
            <SlideDownHeading>Booking Form</SlideDownHeading>
            <FadeInBoxLeft>
            <Text>
            Follow the four steps below, to book your places at the event.
            </Text>
            </FadeInBoxLeft>
        </Box>

        
        <FadeInBoxRight>
            <Heading2>1) enter your contact details</Heading2>
            <Box p='2' m='2'>
            <FormControl isInvalid={bookingFormError.host_name} isRequired>
            <FormLabel>Name</FormLabel>
                <Input name='host_name' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                {!bookingFormError.host_name ? (
                null
                ) : (
                <FormErrorMessage>name is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl  isInvalid={bookingFormError.host_email} isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input name='host_email' type='email' value={bookingForm.host_email} onChange={handleInputChange} />
                {!bookingFormError.host_email ? (
                null
                ) : (
                <FormErrorMessage>email is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl  isInvalid={bookingFormError.host_phone} isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input name='host_phone' type='tel' value={bookingForm.host_phone} onChange={handleInputChange} />
                {!bookingFormError.host_phone ? (
                null
                ) : (
                <FormErrorMessage>phone number is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl isInvalid={bookingFormError.host_address} isRequired>
                <FormLabel>Address</FormLabel>
                <Input name='host_address' type='text' value={bookingForm.host_address} onChange={handleInputChange} />
                {!bookingFormError.host_address ? (
                null
                ) : (
                <FormErrorMessage>address is required.</FormErrorMessage>
                )}
            </FormControl>
            <FormControl>
            <FormLabel pb='0'   mb='0'>Comments</FormLabel>
            <Text p='0' fontSize={'.8rem'} >e.g. others you would like to be seated with (or anything else)</Text>
                <Input name='comment' type='text' value={bookingForm.comment} onChange={handleInputChange} />
            </FormControl>
            </Box>
            </FadeInBoxRight>

        <FadeInBoxLeft>
            <Heading2>2) enter guest names and food choices</Heading2>
            <Text pb='0' fontSize={'.9rem'}>
            <a href='https://liveloveandsparkle.co.uk/menu' target='_blank' rel="noreferrer">
                click here to open the menu in a separate window
            </a>
            </Text>
            <Box p='2' pt='0' m='2' maxW={'600px'}>
            <FormLabel>How many tickets do you require? (including yourself, if necessary)</FormLabel>
            <NumberInputRoot value={bookingForm.number_of_tickets} width={'100px'} min='1' max='10'
                onChange={(valueAsNumber) => onNumberOfTicketsChange(valueAsNumber)}
            >
            <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInputRoot>

            <Box pt='4' width='100%'>
                {
                guestArray.slice(0, bookingForm.number_of_tickets).map( (guest, guestIndex) => {
                    return (
                    <VStack py='4' borderBottom={'solid 2px rgba(170, 51, 106, 0.4)'} width='100%' key={guestIndex}>
                        <HStack width='100%'>
                        
                        <Text width='35%' fontWeight='bold'>guest {guestIndex+1} name:</Text>
                        <Input width='55%' name={`name-${guestIndex}`} type='text' value={guestArray[guestIndex].guest_name} 
                        onChange={ (e) => { setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], guest_name: e.target.value}, ...guestArray.slice(guestIndex +1)])} }
                        />
                        </HStack>

                        <HStack width='100%'>
                        {
                            choiceKeys.map( (course, courseIndex) => {
                            return (

                                <Menu key={courseIndex}>
                                <Button
                                name={`${course}-${courseIndex}`}>
                                {guestArray[guestIndex][`${course}_choice`]}
                                </Button>
                                <MenuList key={courseIndex}>
                                {
                                choices[course].map( (choice, choiceIndex) => {
                                return (


                                        <MenuItem
                                        key={choiceIndex}
                                        fontWeight='normal'
                                        fontSize={['.7rem', '.8rem']}
                                        onClick={()=> setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], [`${course}_choice`]: choice}, ...guestArray.slice(guestIndex +1)])}
                                        >
                                        {choice}
                                        </MenuItem>
                                    

                                )
                                })
                                }
                                </MenuList>
                                </Menu>
                                
                            )
                            })
                        }
                        </HStack>

                        <HStack width='100%'>
                        <Text width='40%' fontWeight='bold'>Dietary Requirements:</Text>
                        <Input width='50%' name={`dr-${guestIndex}`} type='text' value={guestArray[guestIndex].dietary_requirements}
                            onChange={ (e) => { setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], dietary_requirements: e.target.value}, ...guestArray.slice(guestIndex +1)])} }
                        />
                        </HStack>
                    </VStack>


                    )
                })
                }

            </Box>
            </Box>
        </FadeInBoxLeft>

        <FadeInBoxRight>
            <Heading2>3) please go to the JustGiving site to make payment</Heading2>
            <Box p='2' m='2'>
            <Text>
                Tickets are £{`${TICKET_PRICE}`} per person.<br/>Click the logo below, and the payment page will open in a new window.<br/>Total payment required for {bookingForm.number_of_tickets} guest{(bookingForm.number_of_tickets > 1) ? 's'  : ''} is £{TICKET_PRICE * bookingForm.number_of_tickets}
            </Text>

            <a href='https://www.justgiving.com/crowdfunding/Livelovesparklecharitydinner' target='_blank' rel="noreferrer">
                <Image p='5' w='160px' src={fullJustGiving} alt='JustGiving' filter={'grayscale(80%)'} _hover={{filter: 'none'}}/>
            </a>
            </Box>
        </FadeInBoxRight>

        <FadeInBoxLeft>
            <Heading2>4) confirm payment and submit</Heading2>
            <Box p='4' m='2' maxW={'400px'}>
            <VStack>
                <Checkbox pt='4' size='md' colour='pink.500' colorScheme='pink'
                isChecked={bookingForm.paid}
                onChange={(e) => setBookingForm({...bookingForm, paid: !bookingForm.paid})}
                >
                I confirm JustGiving payment has been made
                </Checkbox>

                <Button
                isDisabled={!bookingForm.paid}
                onClick={handleSubmit}
                mt='4'
                colorScheme='pink'
                type='submit'
                >
                Submit
                </Button>
            </VStack>
            </Box>
        </FadeInBoxLeft>
        </Box>
        </>
    )
};

