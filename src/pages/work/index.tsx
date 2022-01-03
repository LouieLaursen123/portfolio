import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { cases } from '../../data/cases'

// Chakra
import { Flex, Text, Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react'

// Assets
import HeroImage from '../../assets/hero.png'

// Components
import { Header } from '../../components/global/Header'
import { Inner } from '../../components/Inner'

const Work: NextPage = () => {
    return(
        <Box display={'flex'} flexDirection={'column'} overflow={'hidden'} position={'relative'} backgroundColor={'white'}>
            <Header />

            <Box as="main" role={'main'} flex={1}>
                <Box className={'heroElement'} position={'fixed'} left={'0%'} top={'0%'} width={'100%'} height={'100vh'}>
                    <Image src={HeroImage.src} alt="" position={'absolute'} top={'0%'} left={'0%'} width={'100%'} height={'100vh'} objectFit={'cover'} />
                </Box>

                <Box backgroundColor={'white'} zIndex={10} position={'relative'} mt={'100vh'} py={8}>
                    <Inner size={'2xl'}>
                        <Heading mb={'1rem'}>Portfolio</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                        <Grid gridTemplateColumns={'repeat(3, 1fr)'} gridGap={'2rem'} py={'2rem'}>
                            {cases.webCases.map((item) => {
                                return(
                                    <Box key={item.id}>
                                        <Image src={item.featuredImage.src} alt="" />
                                        
                                        <Heading>
                                            {item.title}
                                        </Heading>
                                    </Box>
                                )
                            })}
                        </Grid>
                    </Inner>

                    <Box backgroundColor={'orange.300'} py={'2rem'}>
                        <Inner size={'2xl'}>
                            <Heading>Hovedforløb 2</Heading>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <Grid gridTemplateColumns={'repeat(3, 1fr)'} gridGap={'2rem'} py={'2rem'}>
                                {cases.hovedforlobTwo.map((item) => {
                                    return(
                                        <Box key={item.id}>
                                            <Image src={item.featuredImage.src} alt="" />

                                            <Heading>
                                                {item.title}
                                            </Heading>
                                        </Box>
                                    )
                                })}
                            </Grid>
                        </Inner>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Work
