import React from 'react'
import Link from 'next/link'

// Chakra
import { Flex, Text, Box, Heading } from '@chakra-ui/react'

// Components
import { Inner } from '../Inner'

export const Header = () => {
    return(
        <Box 
            as="header" 
            className={'header'} 
            py={8} 
            background={'transparent'} 
            position={'absolute'}
            top={'0%'}
            zIndex={10}
            width={'100%'}
        >
            <Inner size={'4xl'}>
                <Flex>
                    <Box flex={0}>
                        <Heading as="h1">Portfolio</Heading>
                    </Box>

                    <Box as="nav" alignSelf={'center'} flex={1}>
                        <Flex justifyContent={'flex-end'}>
                            <Box mr={8}>
                                <Link href="/work">
                                    <a>
                                        Work
                                    </a>
                                </Link>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Inner>
        </Box>
    )
}
