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
        bg='pink.100'
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
        bg: 'pink.300',
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
            direction={{ base: 'column', sm: 'row' }}
            gap='6'
            justify={{ base: 'center', sm: 'space-between' }}
            align={{ base: 'center', sm: 'center' }}>
            
        <a href='https://coppafeel.org/' target='_blank' rel="noreferrer">
            <Image w='140px' src={coppaFeelLogo} alt='Coppa' opacity={isTouchScreen ? '1.0' : '0.6'} 
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
            <Image w='140px' src={fdLogo} alt='FD' opacity={isTouchScreen ? '1.0' : '0.6'} 
            _hover={{
                opacity: '1.0'
            }}
            />
        </a>
        
        </Flex>
    );
}
