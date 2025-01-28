import React, { useState, useEffect } from "react";
import { Box, Stack, Fieldset, Image, Heading, VStack, HStack, Flex, useBreakpointValue } from "@chakra-ui/react";

import { Field } from './ui/field'

import { StepsCompletedContent, StepsContent, StepsItem, StepsList, StepsNextTrigger, StepsPrevTrigger, StepsRoot } from "./ui/steps"
import { Checkbox } from "./ui/checkbox"

import { NumberInputRoot, NumberInputLabel, NumberInputField } from "./ui/number-input";  
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuItemGroup, MenuSeparator, MenuTriggerItem } from './ui/menu';
import { Button } from "@chakra-ui/react"; 

import { FaChevronDown } from "react-icons/fa";

import { Input } from "@chakra-ui/react";

import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

import { restRequest } from 'js-common/utils'
import fullJustGiving from '../img/fullJustGiving.png';
import { POST, BASE_URL, TICKET_PRICE } from "js-common/constants";

const Text = (props) => {
    return (
        <Box
            fontSize={['.8rem', '1rem']}
            p='4'
            {...props}
        >
            {props.children}
        </Box>
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

export const Tickets = ({

    keyProps,
    setNotification

}) => {

   

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
    
    const [bookingForm, setBookingForm] = useState(defaultBookingForm)
    const [guestArray, setGuestArray] = useState(defaultGuestArray)
    const [paid, setPaid] = useState(false)
    const [step, setStep] = useState(1)

    useEffect(() => {
        setStep(0)
    }, [] );

    const defaultBookingFormError = {
        host_name : false,
        host_email:  false,
        host_phone: false,
        host_address:  false,
    };

    const [bookingFormError, setBookingFormError] = useState(defaultBookingFormError)

    const handleInputChange = (e) => {
        setBookingForm({...bookingForm, [e.target.name]: e.target.value})
        setBookingFormError(defaultBookingFormError)
    ;}
    
    const onNumberOfTicketsChange = (valueAsNumber) => {
        setBookingForm({...bookingForm, number_of_tickets: valueAsNumber})
    }


    const onPostSuccess = () => {
        setNotification({ text: "Thank you for your booking. Gemma will be in touch.", level: "success" });
        setBookingForm(defaultBookingForm);
        setGuestArray(defaultGuestArray);
    }
    const onPostFailure = (response) => {
        setNotification({ text: `${response.detail}`, level: "warning" });
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

        restRequest(POST, putUrl, onPostSuccess, onPostFailure, tempData, null)

    };

    const Contact= () => {
        return (
            <FadeInBoxRight>
                <Fieldset.Root>
                    <Stack>
                        <Fieldset.Legend>1) enter your contact details</Fieldset.Legend>
                        <Fieldset.HelperText></Fieldset.HelperText>
                    </Stack>
                
                <Fieldset.Content>
                    <Field label='Name' invalid={bookingFormError.host_name} errorText='name is required'>
                        <Input name='host_name' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                    <Field label='Email Address'  invalid={bookingFormError.host_email} errorText='email address is required'>
                        <Input name='host_email' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                    <Field label='Phone Number'  invalid={bookingFormError.host_phone} errorText='phone number is required'>
                        <Input name='host_phone' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                    <Field label='Address'  invalid={bookingFormError.host_address} errorText='address is required'>
                        <Input name='host_address' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                    <Field label='Comments' helperText='e.g. others you would like to be seated with (or anything else)'>
                        <Input name='comment' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                </Fieldset.Content>
                </Fieldset.Root>
            </FadeInBoxRight>
        )
    }
    const Guests= () => {
        return (
            <Box>
                <Heading>2) enter guest names and food choices</Heading>
                <Text pb='0' fontSize={'.9rem'}>
                <a href='https://liveloveandsparkle.co.uk/menu' target='_blank' rel="noreferrer">
                    click here to open the menu in a separate window
                </a>
                </Text>
            </Box>
        )
    }

    const Payment= () => {
        return (
            <Box>
                <Heading>3) please go to the JustGiving site to make payment</Heading>
                <Box p='2' m='2'>
                <Text>
                    Tickets are £{`${TICKET_PRICE}`} per person.<br/>Click the logo below, and the payment page will open in a new window.<br/>Total payment required for {bookingForm.number_of_tickets} guest{(bookingForm.number_of_tickets > 1) ? 's'  : ''} is £{TICKET_PRICE * bookingForm.number_of_tickets}
                </Text>

                <a href='https://www.justgiving.com/crowdfunding/livelovesparkle' target='_blank' rel="noreferrer">
                    <Image p='5' w='160px' src={fullJustGiving} alt='JustGiving' filter={'grayscale(80%)'} _hover={{filter: 'none'}}/>
                </a>
                <Stack>
                    <Checkbox pt='4' size='md' colour='pink.500' colorScheme='pink'
                        checked={paid}
                        onCheckedChange={(e) => setPaid(!paid)}
                        >
                        I confirm JustGiving payment has been made
                    </Checkbox>

                    <Button
                        disabled={!paid}
                        onClick={handleSubmit}
                        mt='4'
                        colorScheme='pink'
                        type='submit'
                        maxWidth='150px'
                    >
                        Submit
                    </Button>
                </Stack>
                </Box>
            </Box>
        )
    }

    return ( 
        <Box pl={[2,8]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>
            
            <SlideDownHeading>Booking Form</SlideDownHeading>
            <FadeInBoxLeft>
                <Text>Follow the three steps below, to book your places at the event.</Text>
            </FadeInBoxLeft>

            <StepsRoot step={step} onStepChange={(e) => setStep(e.step)} 
                count={3} size='xs' colorPalette='pink' mt='8'
                variant='solid'>
            <StepsList>
                <StepsItem index={0} title="contact" />
                <StepsItem index={1} title="guests" />
                <StepsItem index={2} title="payment" />
            </StepsList>
            <Flex justify='space-between'>
                <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                    Prev
                </Button>
                </StepsPrevTrigger>
                <StepsNextTrigger asChild>
                <Button variant="outline" size="sm" disabled={step === 2}>
                    Next
                </Button>
                </StepsNextTrigger>
            </Flex>
            <StepsContent index={0}><Contact/></StepsContent>
            <StepsContent index={1}><Guests/></StepsContent>
            <StepsContent index={2}><Payment/></StepsContent>

            </StepsRoot>
   
        </Box>
    )
};

/* 
return ( 

        <FadeInBoxRight>
            <Heading>1) enter your contact details</Heading>
            <Box p='2' m='2'>
            <Fieldset isInvalid={bookingFormError.host_name} isRequired>
            <Box>Name</Box>
                <Input name='host_name' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                {!bookingFormError.host_name ?
                null
                :
                <Box>name is required.</Box>
                }
            </Fieldset>
            <Fieldset  isInvalid={bookingFormError.host_email} isRequired>
                <Box>Email Address</Box>
                <Input name='host_email' type='email' value={bookingForm.host_email} onChange={handleInputChange} />
                {!bookingFormError.host_email ?
                null
                :
                <Box>email is required.</Box>
                }
            </Fieldset>
            <Fieldset  isInvalid={bookingFormError.host_phone} isRequired>
                <Box>Phone Number</Box>
                <Input name='host_phone' type='tel' value={bookingForm.host_phone} onChange={handleInputChange} />
                {!bookingFormError.host_phone ? 
                null
                :
                <Box>phone number is required.</Box>
                }
            </Fieldset>
            <Fieldset isInvalid={bookingFormError.host_address} isRequired>
                <Box>Address</Box>
                <Input name='host_address' type='text' value={bookingForm.host_address} onChange={handleInputChange} />
                {!bookingFormError.host_address ? 
                null
                :
                <Box>address is required.</Box>
                }
            </Fieldset>
            <Fieldset>
            <Box pb='0'   mb='0'>Comments</Box>
            <Text p='0' fontSize={'.8rem'} >e.g. others you would like to be seated with (or anything else)</Text>
                <Input name='comment' type='text' value={bookingForm.comment} onChange={handleInputChange} />
            </Fieldset>
            </Box>
        </FadeInBoxRight> 


        <FadeInBoxLeft>
            <Heading>2) enter guest names and food choices</Heading>
            <Text pb='0' fontSize={'.9rem'}>
            <a href='https://liveloveandsparkle.co.uk/menu' target='_blank' rel="noreferrer">
                click here to open the menu in a separate window
            </a>
            </Text>
            <Box p='2' pt='0' m='2' maxW={'600px'}>
            <Box>How many tickets do you require? (including yourself, if necessary)</Box>
            <NumberInputRoot value={bookingForm.number_of_tickets} width={'100px'} min='1' max='10'
                onChange={(valueAsNumber) => onNumberOfTicketsChange(valueAsNumber)}
            >
                <NumberInputField />
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
                                <MenuRoot key={courseIndex}>
                                    <MenuTrigger asChild>
                                        <Box mr='8' _hover={{color:'pink.600'}}>
                                            {guestArray[guestIndex][`${course}_choice`]}
                                        </Box>
                                    </MenuTrigger>

                                    <MenuContent fontFamily='Poppins'  key={courseIndex}>

                                    {choices[course].map( (choice, choiceIndex) => {
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
                                    })}

                                    </MenuContent>
                                </MenuRoot>                                    
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
            <Heading>3) please go to the JustGiving site to make payment</Heading>
            <Box p='2' m='2'>
            <Text>
                Tickets are £{`${TICKET_PRICE}`} per person.<br/>Click the logo below, and the payment page will open in a new window.<br/>Total payment required for {bookingForm.number_of_tickets} guest{(bookingForm.number_of_tickets > 1) ? 's'  : ''} is £{TICKET_PRICE * bookingForm.number_of_tickets}
            </Text>

            <a href='https://www.justgiving.com/crowdfunding/livelovesparkle' target='_blank' rel="noreferrer">
                <Image p='5' w='160px' src={fullJustGiving} alt='JustGiving' filter={'grayscale(80%)'} _hover={{filter: 'none'}}/>
            </a>
            </Box>
        </FadeInBoxRight>



        <FadeInBoxLeft>
            <Heading>4) confirm payment and submit</Heading>
            <Box p='4' m='2' maxW={'400px'}>
            <Stack>
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
            </Stack>
            </Box>
        </FadeInBoxLeft>
    </Box>
)
 */

