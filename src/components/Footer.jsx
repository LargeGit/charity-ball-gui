import { React } from 'react';
//import { Link } from "react-router-dom";

import { chakra, Stack, Image, Icon, Flex, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
//import { FaTwitter, FaYoutube } from 'react-icons/fa';

import coppaFeelLogo from '../img/Coppafeel_logo.jpg';
import fdLogo from '../img/fd_fulllogo_col-blk.jpg';
import justGiving from '../img/justGiving.png';

import { isTouchScreen } from 'js-common/constants'

function JustGiving () {
  return <Image width='5' src={justGiving} />
};
  
  
const SocialButton = ( {children, label, href, target} ) => {
    return (
    <chakra.button
        rounded={'full'}
        bg='lightgray'
        w='8'
        h='8'
        cursor={'pointer'}
        as={'a'}
        href={href}
        target={target}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
        bg: 'darkgray',
    }}>
        <VisuallyHidden>{label}</VisuallyHidden>
    {children}
    </chakra.button>
    );
};

export default function Footer() {
    return (
        <Flex
            px='8'
            pb='4'
            pt={10}
            direction={{ base: 'column', md: 'row' }}
            gap='6'
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            
        <a href='https://coppafeel.org/' target='_blank' rel="noreferrer">
            <Image w='160px' src={coppaFeelLogo} alt='Coppa' opacity={isTouchScreen ? '1.0' : '0.6'} 
            _hover={{
                opacity: '1.0'
            }}
            />
        </a> 

        <Stack direction={'row'} spacing='6'>
            <SocialButton label={'email'} href={'mailto:gemmafeatonby@hotmail.com/'} target={'_blank'}>
            <FaEnvelope />
            </SocialButton>
            <SocialButton label={'JustGiving'} href={'https://www.justgiving.com/crowdfunding/Livelovesparklecharitydinner/'} target={'_blank'}>
            <JustGiving />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/'} target={'_blank'}>
            <FaInstagram />
            </SocialButton>
        </Stack>
        <a href='https://futuredreams.org.uk/' target='_blank' rel="noreferrer">
            <Image w='160px' src={fdLogo} alt='FD' opacity={isTouchScreen ? '1.0' : '0.6'} 
            _hover={{
                opacity: '1.0'
            }}
            />
        </a>
        
        </Flex>
    );
}
