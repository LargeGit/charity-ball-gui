import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Button, Heading, Box} from "@chakra-ui/react";
//import {  Text, Input, Image, IconButton } from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";

import { CommonTable } from 'chakra-react-common/common-table';

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';


//import { restRequest } from 'js-common/utils'
import { GET, BASE_URL } from "js-common/constants";



export default function Report ( props ) {

    const [passkey, setPasskey] = useState('')
    const [isPasskeyError, setIsPasskeyError] = useState(false)

    const [data, setData] = useState([])

    const [state, setNotification] = useToastHook();
    //const navigate = useNavigate()

    const handlePasskeyInputChange = (e) => {
        setPasskey(e.target.value)
        setIsPasskeyError(false)
    ;}

    useEffect(() => {
        const ssPasskey = JSON.parse(window.sessionStorage.getItem('passkey'));
        if (ssPasskey != null) {
        handleSubmit();
        }
    },
    []
    );


  const handleSubmit = () => {

    const ssPasskey = JSON.parse(window.sessionStorage.getItem('passkey'));
    
    if (!ssPasskey && passkey === '') {
        setIsPasskeyError(true)
        return
    }

    const fetchData = {
        method: GET,
        headers: new Headers({
            'Content-Type': 'application/json; charset=UTF-8',
            'Accept': 'application/json'

        })
    }

    var wasSuccessful = true;

    fetch(`${BASE_URL}booking/?passkey=${ssPasskey ? ssPasskey : passkey}`, fetchData)
      
        .then( response=>{
            wasSuccessful = response.ok;
            return ( response.json() )
        })

        .then( data=>{
            if (wasSuccessful) {
            if (!ssPasskey) {
                window.sessionStorage.setItem('passkey', JSON.stringify(passkey));
            }
            setPasskey('')
            setData(data)
            } else {
            setNotification({ text: `${data.detail}`, level: "error" });
            }
        })
        
        .catch((error) => {
            setNotification({ text: `Oops, something went wrong! ${error}`, level: "error" });
        })

  };

    const structure = {
        created: ['created', '/user', 'user_id'],
        host_name: ['host', '/user', 'user_id'],
        host_email: ['email', '/user', 'user_id'],
        host_phone: ['phone', '/user', 'user_id'],
        guest_name: ['guest name', '/user', 'user_id'],
        dietary_requirements: ['diet', '/user', 'user_id'],
        comment: ['comment', '/user', 'user_id'],
  };
  const name = 'bookingReport';


    const TableView = () => {
        return (
        <>
        <Heading p='4' color='pink.600' size='md'>Access Booking Reports</Heading>
        <CommonTable
            data={data}
            structure={structure}
            name={name}
        />
        </>
        )
    };

    return (
        <>
        {
        (JSON.parse(window.sessionStorage.getItem('passkey'))) ?
        <TableView />
        :
        <>
        <Box p='6' m='4' pl={[2,8]} >
        <Heading pb={'60px'} color='pink.600' size='md'>Access Booking Reports</Heading>
        <FormControl isInvalid={isPasskeyError} {...props}>
            <FormLabel>Passkey</FormLabel>
            <Input id='passkey' type='password' value={passkey} onChange={handlePasskeyInputChange} />
            {!isPasskeyError ? (
            <FormHelperText>
                Enter your passkey to access the report
            </FormHelperText>
            ) : (
            <FormErrorMessage>cannot be blank.</FormErrorMessage>
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
        </>
        } 

        </>
    ) 
};







