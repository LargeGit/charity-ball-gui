import React, { useEffect } from "react";
import { FormControl, FormHelperText, FormErrorMessage,
  Image, Button, Box, Heading, Checkbox, VStack, useBreakpointValue } from "@chakra-ui/react";

import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";  


import { FormLabel as ChakraFormLabel } from "@chakra-ui/react";
import { Input as ChakraInput } from "@chakra-ui/react";
import { Text as ChakraText } from "@chakra-ui/react";

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

//import { restRequest } from 'js-common/utils'
import fullJustGiving from '../img/fullJustGiving.png';
import { POST, BASE_URL } from 'js-common/constants'


export function Register (props) {

  const [input, setInput] = React.useState('')
  const [isError, setIsError] = React.useState(false)

  const [state, setNotification] = useToastHook();

  
  const handleInputChange = (e) => {
    setInput(e.target.value)
    setIsError(false)
  ;}
 
  const handleSubmit = () => {
    
    if (input === '') {
      setIsError(true)
      return
    }
    setIsError(false)

    var accessToken = 'blank';

    if ('accessToken' in window.sessionStorage) {
      accessToken = window.sessionStorage.getItem('accessToken');
    };

    const fetchData = {
      method: POST,
      body: JSON.stringify({email_address: input}),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json',
        "Authorization": `Bearer ${accessToken}`
      })
    }

    var wasSuccessful = true;

    fetch(`${BASE_URL}register/`, fetchData)
      
      .then( response=>{
        wasSuccessful = response.ok;
        return ( response.json() )
      })

      .then( data=>{
        console.log("DATA", data);
        if (wasSuccessful) {
          setNotification({ text: `email ${data.email_address} registered`, level: "success" });
          setInput('')
        } else {
          setNotification({ text: `${data.detail}`, level: "warning" });
        }
      })
      
      .catch((error) => {
        setNotification({ text: `Oops, something went wrong! ${error}`, level: "error" });
      })

  };

  return (
    <Box pt={'60px'} m='4' pl={[2,8]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>
    <Heading pb={'60px'} color='pink.600' size='md'>Register</Heading>
    <FormControl isInvalid={isError} {...props}>
      <FormLabel>Email Address</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Please register your email address and we will be in contact.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <Button
        mt='4'
        colorScheme='pink'
        isLoading={props.isSubmitting}
        type='submit'
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </FormControl>
    </Box>
  )
};