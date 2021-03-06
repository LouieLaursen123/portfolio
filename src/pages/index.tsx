import {useState, useEffect, useRef} from 'react';
import Head from 'next/head'
import { GetStaticProps, NextPage } from 'next'
import { skillsData } from '../data/skills-content'
import { cases } from '../data/cases'

// Assets
import HeroImage from '../assets/hero.png'

// Chakra
import { Flex, Text, Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react'

// Components
import { Inner } from '../components/Inner'
import { ImageTeaser } from '../components/ImageTeaser'
import { LatestCases } from '../components/LatestCases'
import { Header } from '../components/global/Header'
import { Layout } from '../components/global/Layout'
import { Skills } from '../components/skills'

const HomePage: NextPage = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} overflow={'hidden'} position={'relative'} backgroundColor={'white'}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Box className={'heroElement'} position={'fixed'} left={'0%'} top={'0%'} width={'100%'} height={'100vh'}>
          <Image src={HeroImage.src} alt="" position={'absolute'} top={'0%'} left={'0%'} width={'100%'} height={'100vh'} objectFit={'cover'} />
        </Box>

        <Box backgroundColor={'white'} zIndex={10} position={'relative'} mt={'100vh'} py={8}>
          <Inner size={'lg'} mb={8}>
            <ImageTeaser />
          </Inner>

          <Box backgroundColor={'orange.300'} py={'2rem'}>
            <Inner size={'lg'}>
              <Heading mb={'0.5rem'}>
                Kompetencer
              </Heading>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Text>
              <Grid gridTemplateColumns={'repeat(3, 1fr)'} gridGap={'2rem'} py={'2rem'}>
                  {skillsData.skills.map((item) => {
                    return(
                      <Box key={item.id} backgroundColor={'white'} p={'0.5rem'}>
                        <Heading>{item.title}</Heading>
                        <Text>{item.introduction}</Text>
                      </Box>
                    )
                  })}
              </Grid>
            </Inner>
          </Box>
        </Box>
      </Layout>
    </Box>
  )
}

export default HomePage
