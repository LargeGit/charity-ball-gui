import React, { useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";

import { Link } from '@chakra-ui/react';


import { Box, Flex, Text, IconButton, Button, Stack, Group } from '@chakra-ui/react';
import {Collapsible, Icon, useBreakpointValue, useDisclosure } from '@chakra-ui/react';

import { MenuContent, MenuItem, MenuRoot, MenuTrigger, MenuItemGroup, MenuSeparator, MenuTriggerItem } from './ui/menu';

import { PopoverBody, PopoverContent, PopoverRoot, PopoverTrigger } from './ui/popover';

//import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, MenuGroup } from '@chakra-ui/react'

import { FaChevronDown, FaXmark, FaBars } from "react-icons/fa6";
import { BsPersonLinesFill } from 'react-icons/bs';
import { isTouchScreen } from 'js-common/constants'


const menuItems = [
    {label: "home", link: '/home'},
    {label: "my story", link: '/story'},
    {label: "tickets", link: '/ticket'},
    {label: "details", children: [
        {label: "menu", link: '/menu'},
        {label: "band", link: '/band'},
        {label: "timing", link: '/timing'},
        {label: "faqs", link: '/faq'},
    ]},
    {label: "sponsors", link: '/sponsor'},
    {label: "report", link: '/report'},
]


export const MenuWithSubnavigation = (

    keyProps,
    setNotification

) => {

    return (
        <Flex
            justify='space-between'
            bg={'white'}
            color={isTouchScreen ? 'pink.600': 'gray.600'}
            h={'60px'}
            borderBottomWidth='1px' borderBottomColor={'gray.200'}
            align='center'
            >
            <Logo/>
            <ExpandedVersion/>
            <MenuVersion/>
        </Flex>
    )
}

const Logo = () => {


    return (
        <Link
            as={ReactLink}
            ml='4'
            color={isTouchScreen ? 'pink.600' : 'pink.400'}
            to={'/home'}
            fontFamily='Oooh Baby'
            fontSize='1.4rem'
            fontWeight='bold'
            _hover={{
                color: 'pink.600',
                bg: 'pink.50'
            }}
        >
            Live Love & Sparkle
    </Link>
    )
}


const ExpandedVersion = () => {

    const [open, setOpen] = useState(false)

    return (
        <Flex display={{base:'none', md:'flex' }} wrap='none' gap='4' mr='4'>
            {menuItems.map( (item) => (
                <Box key={item.label}>
                    <PopoverRoot positioning={{placement: 'bottom-end', offset:{mainAxis:12, crossAxis: 12}}}>
                        <PopoverTrigger asChild>
                            <Box
                                textDecoration='none'
                                as={ReactLink}
                                to={item.link ?? '#'}
                                _hover={{
                                    color: 'pink.600',
                                }}
                                >
                                {item.label}
                            </Box>
                        </PopoverTrigger>
                        <PopoverContent width='8rem'>
                        {item.children && (    
                            <Stack spaceY='2' py='4'>
                                {item.children.map( (child) => (
                                    <Box
                                        key={child.label}
                                        px='2'
                                        fontFamily='Poppins'
                                        textDecoration='none'
                                        as={ReactLink}
                                        to={child.link ?? '#'}
                                        _hover={{
                                            color: 'pink.600',
                                        }}
                                        >
                                    {child.label}
                                </Box>
                                ))}
                            </Stack>

                        )}
                        </PopoverContent>
                    </PopoverRoot>
                </Box>
            ))}
        </Flex>
    )
}


const singleMenuItem = (item) => {

    return (
        <Box
            textDecoration='none'
            as={ReactLink}
            to={item.link ?? '#'}
            _hover={{
                color: 'pink.600',
                bg: 'pink.50'
            }}
            >
            {item.label}
        </Box>
    )
}

const MenuVersion = () => {

    const navigate = useNavigate()

    return (

        <Box display={{base:'block',md:'none' }}>
        <MenuRoot>
        <MenuTrigger asChild>
            <Box mr='8' _hover={{color:'pink.600'}}><FaBars/></Box>
        </MenuTrigger>
        <MenuContent fontFamily='Poppins'>
            {menuItems.map((item) => (
                <MenuItem
                    key={item.label}
                    _hover={{
                        color: 'pink.600'
                    }}
                    onClick={()=>{navigate(item.link)}}
                    >
                    {item.label}
                </MenuItem>
            ))}
        </MenuContent>
        </MenuRoot>
        </Box>
    )
}


export const OldWithSubnavigation = (

    keyProps,
    setNotification

) => {

    const [ topLevelIsOpen, setTopLevelIsOpen ] = useState(false);

    
    return (
        <Box>
            <Flex
                bg={'white'}
                color={'gray.600'}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom='1'
                borderStyle={'solid'}
                borderColor={'gray.200'}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1 }}
                    justify={'space-between'}
                    align={'center'}
                >
                    <ReactLink to='/home'>
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            color={isTouchScreen ? 'pink.600' : 'gray.600'}
                            onClick={()=>{setTopLevelIsOpen(false)}}
                            fontFamily='Oooh Baby'
                            fontSize='1.4rem'
                            fontWeight='bold'
                            _hover={{
                                color: 'pink.600',
                            }}
                        >
                            Live Love & Sparkle
                        </Text>
                    </ReactLink>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav  setTopLevelIsOpen={setTopLevelIsOpen}/>
                    </Flex>
                               
                    <Flex
                        ml={{ base: -2 }}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        <IconButton
                            onClick={()=>{setTopLevelIsOpen(!topLevelIsOpen)}}
                            icon={
                                topLevelIsOpen ? <FaXmark w='3' h='3' /> : <FaBars w='5' h='5' />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>
                </Flex>

            
            </Flex>

            <Collapsible.Root in={topLevelIsOpen} animateOpacity>
                <MobileNav setTopLevelIsOpen={setTopLevelIsOpen}/>
            </Collapsible.Root>
        </Box>
    );
}

  


const DesktopNav = ( ) => {

    return (
        <Stack direction={'row'} spacing='4'>
        {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
            <PopoverRoot trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger asChild>
                    <Link
                        as={ReactLink}
                        p='2'
                        to={navItem.href ?? '#'}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={'gray.600'}
                        _hover={{
                            textDecoration: 'none',
                            bg: 'pink.50',
                            color: 'pink.600',
                        }}
                    >
                        {navItem.label}
                    </Link>
                </PopoverTrigger>

                {navItem.children && (
                    <PopoverContent border='0' boxShadow={'xl'} bg={'white'} p='4' rounded={'xl'} minW={'sm'}>
                        <PopoverBody>
                            {navItem.children.map((child) => (
                                <DesktopSubNav key={child.label} {...child} />
                            ))}
                        </PopoverBody>
                    </PopoverContent>
                )}
            </PopoverRoot>
            </Box>
        ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            as={ReactLink}
            to={href}
            role={'group'}
            display={'block'}
            p='2'
            rounded={'md'}
            _hover={{ bg: 'pink.50' }}
        >
        <Stack direction={'row'} align={'center'}>
            <Box>
                <Text
                    transition={'all .3s ease'}
                    _groupHover={{ color: 'pink.400' }}
                    fontWeight={500}>
                    {label}
                </Text>
                <Text fontSize={'sm'}>{subLabel}</Text>
            </Box>

        </Stack>
        </Link>
    );
};

const MobileNav = ( {setTopLevelIsOpen} ) => {
    return (
        <Stack
            bg={'white'}
            p='4'
            display={{ md: 'none' }}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} setTopLevelIsOpen={setTopLevelIsOpen} {...navItem} />
            ))}
        </Stack>
    );
};


const MobileNavItem = ({ setTopLevelIsOpen, label, children, href }) => {

    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack spacing='4' onClick={children && onToggle}>
        <Flex
            py='2'
            as={ReactLink}
            to={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
                textDecoration: 'none',
            }}
        >
            <Text
                fontWeight={600}
                color={'gray.600'}
                onClick={() => {href && setTopLevelIsOpen(false)}}
            >
                {label}
            </Text>
            {children && (
                <Icon
                    as={FaChevronDown}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                    w='6'
                    h='6'
                />
            )}
        </Flex>

        <Collapsible in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
                mt='2'
                pl='4'
                borderLeft='1'
                borderStyle={'solid'}
                borderColor={'gray.200'}
                align={'start'}
            >
                {children &&
                    children.map((child) => (
                        <Link key={child.label} as={ReactLink} py='2' to={child.href} onClick={() => {onToggle(); setTopLevelIsOpen(false)}}>
                            {child.label}
                        </Link>
                ))}
            </Stack>
        </Collapsible>
        </Stack>
    );
};


const NAV_ITEMS = [
    {
        label: 'home',
        href: '/home'
    },
    {
        label: 'my story',
        href: '/story'
    },
    {
        label: 'tickets',
        subLabel: 'Join our mailing list',
        href: '/tickets'
    },
    {
        label: 'event details',
        children: [
        {
            label: 'The Band',
            subLabel: 'Noughty Nineties',
            href: '/band'
        },
        /*{
            label: 'raffle prizes',
            href: '/raffle'
        },
        */
        {
            label: 'schedule',
            href: '/schedule'
        },
        {
            label: 'menu',
            href: '/menu'
        },
        {
            label: 'sponsors',
            href: '/sponsors'
        },
        {
            label: 'FAQs',
            href: '/faq'
        },
        ],
    },
    {
        label: 'reports',
        children: [
        {
            label: 'Booking report',
            subLabel: 'admin only',
            href: '/bookingreport'
        },
        ],
    },
];

// ***************************************
// ***************************************
// ***************************************


