import React, { useState } from 'react'
import { Routes, Route, Outlet, useNavigate, Link  } from "react-router-dom";

import { ChakraProvider, Image, Box, Text, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
//import { Link, VStack, Grid } from '@chakra-ui/react';

import flyer from './img/CharityBall.png';
import wideFlyer from './img/LandscapePoster.png';
import { mySystem } from './theme/theme.js'
//import { Logo } from './Logo';

//common imports
import { Notify } from "chakra-react-common/notification";
import { POST, BASE_URL } from "js-common/constants";
import { FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';

//import NavBar from './components/NavBar.jsx';
import Band from './components/Band.jsx';
import Footer from './components/Footer.jsx';
import { Faqs } from './components/Faqs.jsx';
import MyStory from './components/MyStory.jsx';
import Raffle from './components/Raffle.jsx';
import Sponsors from './components/Sponsors.jsx';
import { Tickets } from './components/Tickets.jsx';
import Schedule from './components/Schedule.jsx';

import { Report } from './components/Report.jsx';
import {HomeOnBackground} from './components/Home.jsx';
import { Menu } from './components/Home.jsx';
import { MenuWithSubnavigation } from './components/NavBar.jsx';
import { TbDeviceDesktopSearch } from 'react-icons/tb';


function App() {

    const navigate = useNavigate()

    const [notification, setNotification] = useState({text:'',level:''})

    const tempKeyProps = JSON.parse(window.sessionStorage.getItem('keyProps')) 

    const [keyProps, setKeyPropsReal] = useState(tempKeyProps ? tempKeyProps : {
        group: '',
        stage: '__home__',
        event: '',
        season: '',
        username: 'guest',
        role: '__guest_role__',
        uid: '1111-2222-3333-4444',
        uState: '__unverified__',
        showHelp: false,
        cid: '1111-2222-3333-4444',
    })

    const setKeyProps = (myProps) => {
        setKeyPropsReal(myProps)
        window.sessionStorage.setItem('keyProps', JSON.stringify(myProps))
    } 


    return (
        <ChakraProvider  value={mySystem} >
            <Routes>
                <Route path="/" element={ <Layout keyProps={keyProps} notification={notification} setNotification={setNotification}/> } >
                <Route path='' element={<HomeOnBackground />} />
                <Route path='home' element={<HomeOnBackground />} />
                <Route path='menu' element={<Menu />} />
                <Route path='test' element={<HomeOnBackground />} />
                <Route path='story' element={<MyStory/>} />
                <Route path='sponsor' element={<Sponsors/>} />
                <Route path='raffle' element={<Raffle/>} />
                <Route path='ticket' element={<Tickets setNotification={setNotification}/>} />
                <Route path='faq' element={<Faqs/>} />
                <Route path='band' element={<Band/>} />
                <Route path='schedule' element={<Schedule/>} />
                <Route path='report' element={<Report keyProps={keyProps} setKeyProps={setKeyProps} setNotification={setNotification}/>} />
                <Route path='*' element={<PageNotFound/>} />
                </Route>
            </Routes>
        </ChakraProvider>
    );

}

const Layout = ( {keyProps, notification, setNotification} ) => {
    return (
        <Grid
            minHeight={'100vh'}
            gridTemplateRows="auto auto 1fr auto"
            gridTemplateAreas={`
                "header"
                "notification-bar"
                "main"
                "footer"`
            }>
            <GridItem area={'header'} className='no-print'>
                <MenuWithSubnavigation/>
            </GridItem>

            <GridItem area={'notification-bar'} className='no-print'>
                <Notify notification={notification}/>
            </GridItem>

            <GridItem area={'main'} >
                <Outlet  />
            </GridItem>

            <GridItem area={'footer'}  className='no-print'>
                <Footer/>
            </GridItem>
        </Grid>
    )
};

 
  
const Home = (props) => {
  return (
    <Box p='6' m='4' pl={[2,8]} maxW={useBreakpointValue({ base: 'xl', md: '3xl' })}>
        <FadeInBoxRight>
        <Image src={useBreakpointValue({ base: flyer, md: wideFlyer })} alt='Flyer'/>
        </FadeInBoxRight>
        <FadeInBoxLeft>
        <Box pt='4'>
            Drinks receptions starts at: <Box className='blinker blink-text' display={'inline-block'} fontFamily='Oooh Baby' color='pink.500'> 6:30pm</Box>
        </Box>
        <Box py='1'>
            Carriages home at: <Box className='blink-text' display={'inline-block'} fontFamily='Oooh Baby' color='pink.500'> midnight</Box>
        </Box>
        <Box py='4' _hover={{color: 'pink.500'}}>
            <Link to='/tickets'>Click <Box display={'inline-block'} fontFamily='Oooh Baby' fontSize={'1.4rem'}>here</Box> for tickets</Link>
        </Box>
        </FadeInBoxLeft>
        </Box>
  )
};

const PageNotFound = (props) => {
    return (
        <Text {...props}>
        Page not found.
        </Text>
    )
};

const Blank = (props) => {
    return (
        <Text {...props}>
        Under Construction.
        </Text>
    )
};

export default App;