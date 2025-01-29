import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Stack, Fieldset, Image, Heading, VStack, Separator, Flex, useBreakpointValue } from "@chakra-ui/react";

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
import { SUCCESS, ERROR, WARNING } from "js-common/constants";

const Text = (props) => {
    return (
        <Box
            fontSize={['.8rem', '1rem']}
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
    setNotification,
    url=`${BASE_URL}charity-ball/`

}) => { 

    const navigate = useNavigate()

    const defaultBookingForm = {
        host_name : '',
        host_email:  '',
        host_phone: '',
        host_address:  '',
        comment: '',
    };

    const defaultGuestArray = [
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
        {guest_name : '', dietary_requirements:  '', starter: 'starter', main: 'main', dessert: 'dessert',},
    ]
    
    const [bookingForm, setBookingForm] = useState(defaultBookingForm)
    const [guestArray, setGuestArray] = useState(defaultGuestArray)
    const [numberOfTickets, setNumberOfTickets] = useState(4)
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
    
    const onPostSuccess = () => {
        setNotification({ text: "Thank you for your booking. Gemma will be in touch.", level: SUCCESS });
        setBookingForm(defaultBookingForm);
        setGuestArray(defaultGuestArray);
        navigate('/home')
    }

    const onPostFailure = (response) => {
        setNotification({ text: 'Oops. Something went wrong. Please try again or contact Gemma', level: ERROR });
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
            item.number_of_tickets = numberOfTickets;
            item.paid = paid;
            item.comment = bookingForm.comment;
        })
        
        tempData = tempData.slice(0, numberOfTickets);

        restRequest(POST, url, onPostSuccess, onPostFailure, tempData, null)

    };

    const contact = () => {
        return (
                <Fieldset.Root>
                <Fieldset.Legend>1) enter your contact details</Fieldset.Legend>
                
                <Fieldset.Content>
                    <Field label='Name' invalid={bookingFormError.host_name} errorText='name is required'>
                        <Input name='host_name' type='text' value={bookingForm.host_name} onChange={handleInputChange} />
                    </Field>
                    <Field label='Email Address'  invalid={bookingFormError.host_email} errorText='email address is required'>
                        <Input name='host_email' type='text' value={bookingForm.host_email} onChange={handleInputChange} />
                    </Field>
                    <Field label='Phone Number'  invalid={bookingFormError.host_phone} errorText='phone number is required'>
                        <Input name='host_phone' type='text' value={bookingForm.host_phone} onChange={handleInputChange} />
                    </Field>
                    <Field label='Address'  invalid={bookingFormError.host_address} errorText='address is required'>
                        <Input name='host_address' type='text' value={bookingForm.host_address} onChange={handleInputChange} />
                    </Field>
                    <Field label='Comments' helperText='e.g. others you would like to be seated with (or anything else)'>
                        <Input name='comment' type='text' value={bookingForm.comment} onChange={handleInputChange} />
                    </Field>
                </Fieldset.Content>
                </Fieldset.Root>
        )
    }

    const guests = () => {
        return (
            <Box>
                <Fieldset.Root>
                    <Stack>
                        <Fieldset.Legend>2) enter guest names and food choices</Fieldset.Legend>
                        <Fieldset.HelperText></Fieldset.HelperText>
                    </Stack>
                <Text py='0' fontSize={'.9rem'}>
                    <a href='https://liveloveandsparkle.co.uk/menu' target='_blank' rel="noreferrer">
                        click here to open the menu in a separate window
                    </a>
                </Text>

                <Field helperText='How many tickets do you require? (including yourself, if necessary)'>
                    <NumberInputRoot value={numberOfTickets} width={'100px'} min='1' max='10'
                        onValueChange={(e) => setNumberOfTickets(e.value)}
                    >
                        <NumberInputField />
                    </NumberInputRoot>
                </Field>
                <Box>
                    {guestArray.slice(0, numberOfTickets).map( (guest, guestIndex) => {
                        return (
                            <Fieldset.Content  key={guestIndex}>
                                <Separator  mt='10' variant='solid' colorPalette='pink' size='md'/>
                                <Flex>
                                    <Box textAlign='right' pr='4' pt='2' fontWeight='medum' width='10rem'>{`guest ${guestIndex+1} name`}</Box>
                                    <Input name={`name-${guestIndex}`} type='text' value={guestArray[guestIndex].guest_name} 
                                        onChange={ (e) => { setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], guest_name: e.target.value}, ...guestArray.slice(guestIndex +1)])} } />
                                </Flex>

                                <Flex pr='4' justify='space-between' gap='4'>
                                    <Field><MenuMenu course='starter' guestIndex={guestIndex}/></Field>
                                    <Field><MenuMenu course='main' guestIndex={guestIndex}/></Field>
                                    <Field><MenuMenu course='dessert' guestIndex={guestIndex}/></Field>
                                </Flex>

                                <Flex>
                                    <Box textAlign='right' pr='4' fontWeight='medum' width='10rem'>dietary requirements</Box>
                                    <Input key='dietary' name={`dietary-${guestIndex}`} type='text' value={guestArray[guestIndex].dietary_requirement} 
                                        onChange={ (e) => { setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], dietary_requirment: e.target.value}, ...guestArray.slice(guestIndex +1)])} } />
                                </Flex>

                            </Fieldset.Content>
                        )
                    })}
                </Box>
                </Fieldset.Root>
            </Box>
        )
    }

    const MenuMenu = ({course, guestIndex}) => {

        return (
            <MenuRoot>
                <MenuTrigger asChild>
                    <Button variant="outline" size="sm" colorPalette='pink'>
                        {guestArray[guestIndex][course] ? guestArray[guestIndex][course] : course}
                    </Button>
                </MenuTrigger>
                <MenuContent>
                    <MenuItem value={choices[course][0]}
                        onClick={() => {setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], [course]: choices[course][0]}, ...guestArray.slice(guestIndex +1)])} } >
                        {choices[course][0]}
                    </MenuItem>
                    <MenuItem value={choices[course][1]}
                        onClick={() => {setGuestArray([...guestArray.slice(0, guestIndex), {...guestArray[guestIndex], [course]: choices[course][1]}, ...guestArray.slice(guestIndex +1)])} } >
                        {choices[course][1]}
                    </MenuItem>
                </MenuContent>
            </MenuRoot>
        )
    }

    const payment= () => {
        return (
            <Fieldset.Root>
            <Stack>
                <Fieldset.Legend>3) please go to the JustGiving site to make payment</Fieldset.Legend>
                <Fieldset.HelperText></Fieldset.HelperText>
            </Stack>
        
            <Fieldset.Content>
            <Text>
                    Tickets are £{`${TICKET_PRICE}`} per person.<br/>Click the logo below, and the payment page will open in a new window.<br/>Total payment required for {numberOfTickets} guest{(numberOfTickets > 1) ? 's'  : ''} is £{TICKET_PRICE * numberOfTickets}
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
            </Fieldset.Content>
            </Fieldset.Root>
        )
    }

    return ( 
        <Box px={[1,2,4,8]} maxW='3xl'>
            
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
            <StepsContent index={0}>{contact()}</StepsContent>
            <StepsContent index={1}>{guests()}</StepsContent>
            <StepsContent index={2}>{payment()}</StepsContent>

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
            <NumberInputRoot value={numberOfTickets} width={'100px'} min='1' max='10'
                onChange={(valueAsNumber) => onNumberOfTicketsChange(valueAsNumber)}
            >
                <NumberInputField />
            </NumberInputRoot>

            <Box pt='4' width='100%'>
                {
                guestArray.slice(0, numberOfTickets).map( (guest, guestIndex) => {
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
                Tickets are £{`${TICKET_PRICE}`} per person.<br/>Click the logo below, and the payment page will open in a new window.<br/>Total payment required for {numberOfTickets} guest{(numberOfTickets > 1) ? 's'  : ''} is £{TICKET_PRICE * numberOfTickets}
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

