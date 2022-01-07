import React, { useState } from 'react'
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
import { CtaButton } from '../../components/CtaButton'

const Work: NextPage = () => {
    return(
        <Box display={'flex'} flexDirection={'column'} overflow={'hidden'} position={'relative'} backgroundColor={'white'}>
            <Header />

            <Box as="main" role={'main'} flex={1}>
                <Box className={'heroElement'} position={'fixed'} left={'0%'} top={'0%'} width={'100%'} height={'100vh'}>
                    <Image src={HeroImage.src} alt="" position={'absolute'} top={'0%'} left={'0%'} width={'100%'} height={'100vh'} objectFit={'cover'} />
                    <Inner size={'xs'}>
                        <Box position={'absolute'} height={'100%'} top={'50%'} left={'10%'} maxWidth={'800px'}>
                            <Heading fontSize={'6rem'}>Louie Bay Laursen</Heading>
                            <Text fontSize={'2rem'}>I mit portfolio kan I finde de opgaver jeg løser til hverdag hos Adaptagency</Text>
                        </Box>
                    </Inner>
                </Box>

                <Box backgroundColor={'white'} zIndex={10} position={'relative'} mt={'100vh'} py={8}>
                    <Inner size={'2xl'}>
                        <Heading mb={'1rem'}>Hovedforløb 1</Heading>
                        <Grid gridTemplateColumns={'repeat(2, 1fr)'} gridGap={'2rem'} py={'2rem'}>
                            {cases.webCases.map((item) => {
                                return(
                                    <Box key={item.id} backgroundColor={'white'} boxShadow={'2px 2px 15px 0px'} position={'relative'}>
                                        <Image src={item.featuredImage.src} width={'100%'} height={'350px'} objectFit={'cover'} alt="" />

                                        <Box p={'0.5rem'} backgroundColor={'rgba(0, 0, 255, 0.5)'} position={'absolute'} width={'100%'} height={'100%'} zIndex={10} top={'0%'}>
                                            <Heading mt={'1rem'} color={'white'}>
                                                {item.title}
                                            </Heading>

                                            <Box mt={'2rem'}>
                                                <CtaButton 
                                                    projectUrl={item.productDocumentation}
                                                    projectLinkTitle={'Se Dokumentation'}
                                                />
                                            </Box>

                                            <Box mt={'2rem'}>
                                                <CtaButton 
                                                    projectUrl={item.productLink}
                                                    projectLinkTitle={'Se Produkt'}
                                                />
                                            </Box>
                                        </Box>
                                    </Box>
                                )
                            })}
                        </Grid>
                    </Inner>

                    <Box backgroundColor={'orange.300'} py={'2rem'}>
                        <Inner size={'2xl'}>
                            <Heading mb={'1rem'}>Hovedforløb 2</Heading>
                            <Grid gridTemplateColumns={'repeat(2, 1fr)'} gridGap={'2rem'} py={'2rem'}>
                                {cases.hovedforlobTwo.map((item) => {
                                    return(
                                        <Box key={item.id} backgroundColor={'white'} boxShadow={'2px 2px 15px 0px'}>
                                            <Image width={'100%'} height={'350px'} objectFit={'cover'} src={item.featuredImage.src} alt="" />

                                            <Box p={'0.5rem'} mt={'0.5rem'} borderTopWidth={'1px'} borderTopColor={'black'}>
                                                <Heading mt={'1rem'}>
                                                    {item.title}
                                                </Heading>

                                                <Text>
                                                    Kernefagligheder: {item.coreDisciplines}
                                                </Text>

                                                <Box mt={'2rem'}>
                                                    <CtaButton 
                                                        projectUrl={item.productDocumentation}
                                                        projectLinkTitle={'Se Dokumentation'}
                                                    />
                                                </Box>

                                                <Box mt={'2rem'}>
                                                    <CtaButton 
                                                        projectUrl={item.productLink}
                                                        projectLinkTitle={'Se Produktet'}
                                                    />
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Grid>
                        </Inner>
                    </Box>

                    <Inner size={'2xl'}>
                        <Box mt={'1rem'}>
                            <Heading>
                                Hovedforløb 3
                            </Heading>
                            <Text>
                                Kommer October 2022
                            </Text>
                        </Box>

                        <Box mt={'1rem'}>
                            <Heading>
                                Hovedforløb 4
                            </Heading>
                            <Text>
                                Kommer October 2023
                            </Text>
                        </Box>
                    </Inner>
                </Box>
            </Box>
        </Box>
    )
}

export default Work
