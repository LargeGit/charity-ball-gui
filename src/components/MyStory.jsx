import React from "react";
import { Box, Stack, Heading, Icon, useBreakpointValue } from "@chakra-ui/react";
import { List } from '@chakra-ui/react'

//import { FaBeer, FaAngry } from 'react-icons/fa';
import { SlideDownHeading, FadeInBoxLeft, FadeInBoxRight } from 'chakra-react-common/miscellaneous';
import { AiOutlineHeart} from 'react-icons/ai';

function Heart() {
  return <Icon as={AiOutlineHeart} />
};

export default function MyStory (props) {

    return (
        <Box py='6' m='2' px={['0','2', '4', '8']} width={useBreakpointValue({ base: "100%", sm: '95%', md: "90%", lg: '850px' })}>

        <SlideDownHeading>My Story</SlideDownHeading>
        <FadeInBoxLeft>
        <Stack spaceY='3' my='4' px={[2,6]} mx={[0,4]} direction='column'>
            <Box>My name is Gemma Duff. I am 39 years old, Mum of two and my husband and I live in Charlton, Malmesbury. I am a solicitor and Partner at a regional law firm, Thrings LLP. I love spending time with my family, going on holiday and sport.</Box>
            <Box>On 19 September 2019, aged 36, I was diagnosed with secondary/incurable breast cancer.</Box>
            <Box>On that day my life as I knew it crumbled. Everything changed.</Box>
            <Box>I had breast fed both my children and shortly after having my daughter I had noticed changes to my right breast. I was referred by my GP to a breast clinic where I was given a sonogram and told I had what looked like blocked milk ducts. I was not offered a mammogram or any further testing as I had no risk factors, no family history, I was “too young” and my body probably hadn’t returned to normal after having my daughter.</Box>
            <Box>12-18 months later I had noticed further changes. Looking back I had all the telltale signs Coppafeel! tell you to look out for. Dimpling, not an obvious lump but thickening, an inverted nipple, swelling and constant pain in my armpit. I asked for another referral to get a second opinion and at that check I was immediately told it didn’t look good and was almost certainly cancer. After weeks of agonising waiting I was told that it was cancer and unfortunately it had spread to my bones which meant that I was treatable but no longer curable.</Box>
            <Box>I immediately started chemotherapy, which I completed in February 2020, and an infusion of other drugs that I have every 3 weeks for as long as they continue to work. In June 2020 I was offered a mastectomy, which I asked for, and I then had radiotherapy in August 2020.</Box>
        </Stack>
        </FadeInBoxLeft>

        <SlideDownHeading>Today</SlideDownHeading>
        <FadeInBoxRight>
        <Stack spaceY='3' my='4' px={[2,6]} mx={[0,4]} direction='column'>
            <Box>Since embarking on this journey my life, and my perspective on life, has completely changed. I was rushing around prior to my diagnosis just trying to get through each day and each week as a busy working mum. I now live with my eyes wide open, grateful for every day and trying to ensure each day I do something that brings me joy.</Box>
            <Box>I am on treatment for life. I have recently had to change my drugs due to cancer in my bones “waking up” and starting to grow again. I am awaiting scans to see if the new drugs are working.</Box>
            <Box>I don’t feel or look sick and I can do everything that I could do before my diagnosis – essentially because even though my cancer had already spread I was still diagnosed relatively early which gives me the best possible chance. There are so many developments now that I am hopeful I will be here for many years to come.</Box>
            <Box>Initially, I did not speak about my diagnosis publicly. I am not sure why. Perhaps fear – of being labelled the sick one or being perceived as weaker somehow. Fear of being vulnerable. Perhaps putting it out there makes it feel more real and therefore more terrifying. Perhaps it is just the wish to lead a “normal” life without the sympathy or pity. </Box>
        </Stack>
        </FadeInBoxRight>

        <SlideDownHeading>The Charities</SlideDownHeading>
        <FadeInBoxLeft>
        <Stack spaceY='3' my='4' px={[2,6]} mx={[0,4]} direction='column'>
            <Box>Two years after my diagnosis, I decided to apply to do a 100km trek across the Scottish Highlands for a charity called Coppafeel! This charity was founded by a lady called Kris Hallenga, who was diagnosed with secondary breast cancer aged 23. She set up this charity with the aim of stamping out the late detection of breast cancer in young people. I was dismissed so many times as being “too young”. I know many others who were told the same thing and as a result are in the same situation as me, living with incurable stage 4 cancer.</Box>
            <Box>For this reason, I am extremely passionate about raising awareness of breast cancer in young people and fundraising for Coppafeel! so that they can continue to save lives by raising awareness, educating and empowering young people to advocate for their health.</Box>
            <Box>Since my diagnosis I have also been supported by a charity called, Future Dreams. Future Dreams House, is a haven for anyone affected by breast cancer where they offer free treatments and support services. This charity was established by a mother and daughter, Sylvie and Danielle, who both had breast cancer and passed away within a year of each other. Danielle was 35 and a mother to three young children. They set up Future Dreams so that no one would ever have to face breast cancer alone. In addition, they are one of the only breast cancer charities in the UK that solely fund research into secondary breast cancer. Those of us living with secondary breast cancer rely upon treatment options so that we might be given more time with our loved ones even after receiving an incurable cancer diagnosis. Future Dreams funds research into treatment options for secondary breast cancer. Whereas some of the larger breast cancer charities put as little as 5% of funds raised to secondary breast cancer, instead focusing on curable cancers.</Box>
            <Box>A beautiful friend introduced me to a Brene Brown quote: “Vulnerability is not winning or losing; it’s having the courage to show up and be seen when we have no control over the outcome. Vulnerability is not weakness; it’s our greatest measure of courage.” This perspective has encouraged me to be open about my diagnosis (I am one third of a support community called Secondary Sisters), as a sign of strength not weakness, and especially to help raise awareness and funds for these important charities and the work that they are doing.</Box>
            <Box>Being diagnosed with cancer at any age is devastating and cruel. To be diagnosed at 36 with two young children is unbelievably unfair. But I have chosen to try and turn something wholly negative into a positive. Fundraising has given me a focus and I have found an energy and passion in raising awareness and funds for both Coppafeel! and Future Dreams. I encourage others to check themselves, know their normal, to know symptoms to look out  for and to advocate for their own health so that I might help prevent others from ending up in my position. I checked myself regularly. I had been checked. But my story is like so many in that I was turned away for being too young. I shout my story from the rooftops so that others might push for answers to save their life.</Box>
            <Box>When I was diagnosed I was given a life expectancy of 4 years and so as part of my fundraising this year I have chosen to celebrate a milestone in reaching my 40th birthday with a charity fundraising dinner raising funds for Coppafeel and Future Dreams at the beginning of Breast Cancer Awareness Month on 7 October 2023.</Box>
            <Box>All profits raised at the Live Love and Sparkle Charity Dinner will be donated to both charities to help them continue their important work.</Box>
        </Stack>
        </FadeInBoxLeft>

        <SlideDownHeading>Meanwhile I will continue:</SlideDownHeading>
        <FadeInBoxRight>
        <Stack spaceY='3' my='4' px={[2,6]} mx={[0,4]} direction='column'>
            <List.Root as='ol' spaceY='3' ps='4' listStylePosition='outside'>
                <List.Item>To raise funds to help Coppafeel! and Future Dreams reach more people and carry on the important work that they do;</List.Item>
                <List.Item>To raise awareness of the importance of regularly checking your chest so that you know your normal;</List.Item>
                <List.Item>To raise awareness to help others have the confidence to advocate for their own health. If you know your normal and something changes don’t be afraid to push for answers. It could save your life;</List.Item>
                <List.Item>To show that cancer does not discriminate – I was young, fit, healthy, no family history or risk factors and it happened to me. It could happen to anyone;</List.Item>
                <List.Item>To offer hope to fellow secondary brothers and sisters that you can live well with cancer. Your body is capable of so much more than you know; and</List.Item>
                <List.Item>To encourage everyone to live a full life doing things they love.</List.Item>
            </List.Root>
        </Stack>
        </FadeInBoxRight>

        <FadeInBoxRight>
        <Stack spaceY='3' my='4' px={[2,6]} mx={[0,4]} direction='column'>
            <Box pt='2' mt='2'>Thank you</Box>
            <Box pt='2' mt='2'>Gemma</Box>
            <Heart pt='2' mt='2'/>
        </Stack>
        </FadeInBoxRight>
        </Box>
    )
};