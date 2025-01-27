import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td,
    TableCaption, TableContainer } from '@chakra-ui/react';
import { VStack, Heading } from '@chakra-ui/react';

import { defaultUser } from 'js-common/constants'

import { DELETE, BASE_URL } from 'js-common/constants'

//import { FaBeer, FaAngry } from 'react-icons/fa';
//import { IoMdClose, IoMdMenu } from 'react-icons/io';


export default function EmailTable ( { currentUser=defaultUser } ) {

    const [rawData, setRawData] = useState([]) 

    useEffect(() => {

        var accessToken = 'blank';

        if ('accessToken' in window.sessionStorage) {
        accessToken = window.sessionStorage.getItem('accessToken');
        };

        var wasSuccessful = true;

        fetch(`${BASE_URL}register/`)
        
        .then( response=>{
            wasSuccessful = response.ok;
            return ( response.json() )
        })
        .then( data=>{
            if (wasSuccessful) {
            setRawData(data)
            } else {
            setNotification({ text: `${data.detail}`, level: "error" });
            }
        })
        .catch((error) => {
            setNotification({ text: `Oops, something went wrong! ${error}`, level: "error" });
        })
    }, []);

    if (currentUser.role !== '__admin_role__') {
        return (
            <>You do not have permissions to view this page.</>
        )
    };

        return (
        <VStack>
        <Heading pt={'40px'} color={'pink.500'} size='md'>Registered email addresses</Heading>
        <TableContainer>
        <Table variant='simple'>
            <TableCaption>Registered Email Addresses</TableCaption>
            <Thead>
            <Tr>
                <Th>address</Th>
                <Th>created</Th>
            </Tr>
            </Thead>
            <Tbody>
            {
            rawData.map((item, index) => (
                <Tr key={index}>
                <Td>{item.email_address}</Td>
                <Td>{item.created}</Td>
                </Tr>
            ))
            }
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>address</Th>
                <Th>created</Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
        </VStack>
    )
};