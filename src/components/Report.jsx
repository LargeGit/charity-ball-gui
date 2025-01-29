import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

import { Fieldset, Box, Button, Heading} from "@chakra-ui/react";
//import {  Text, Input, Image, IconButton } from "@chakra-ui/react";

import { Input } from "@chakra-ui/react";

import { CommonTable } from 'chakra-react-common/common-table';
import { SignIn } from './SignIn.jsx'

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';

import { GET, BASE_URL, ADMIN_ROLE } from "js-common/constants";
import { restRequest } from 'js-common/utils'



export const Report = ({
    
    keyProps,
    setKeyProps,
    setNotification,

}) => {

    const [data, setData] = useState([])

    //const navigate = useNavigate()

    const handlePasskeyInputChange = (e) => {
        setPasskey(e.target.value)
        setIsPasskeyError(false)
    ;}

    useEffect(() => {
        restRequest(GET, `${BASE_URL}charity-ball/`, (r)=>setData(r), ()=>setData([]), null, null)
    },
        []
    );

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
        <Heading p='4' color='pink.600' size='md'>Booking Reports</Heading>
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
        { keyProps.role === ADMIN_ROLE ?
        <TableView/>
        :
        <SignIn keyProps={keyProps} setKeyProps={setKeyProps} setNotification={setNotification} />
        } 
        </>
    ) 
};







