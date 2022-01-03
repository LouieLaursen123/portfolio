import React from 'react';
import Image from 'next/image'

// Assets
import HeroImage from '../assets/hero.png'

// Chakra
import { Flex, Text, Box, Heading } from '@chakra-ui/react'

export const ImageTeaser = () => {
    return(
        <Box className={'ImageTeaser'} display={'flex'}>
            <Box flex={1}>
                <Heading as={'h4'} mb={'1.5rem'}>
                    Portfolio
                </Heading>
                
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
            </Box>

            <Box flex={1}>
                <Image src={HeroImage} alt={'Billede'} />
            </Box>
        </Box>
    )
}