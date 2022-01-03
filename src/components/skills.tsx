import React from 'react'
import { skillsData } from '../data/skills-content'

// Assets
import HeroImage from '../assets/hero.png'

// Chakra
import { Flex, Text, Box, BoxProps, Heading, Image } from '@chakra-ui/react'

type Props = {
    title: string
} & BoxProps

export const Skills = ({ title }: Props) => {
    return(
        <Box className={'Skills'}>
            <Heading as={'h2'}>
                {title}
            </Heading>
        </Box>
    )
}
