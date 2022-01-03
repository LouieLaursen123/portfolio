import React from 'react'

// Chakra
import { Text, Box } from '@chakra-ui/react'

// Components
import { Inner } from '../Inner'

export const Footer = () => {
    return(
        <Box as="footer" zIndex={10} backgroundColor={'white'}>
            <Inner size={'4xl'}>
                <Text>Powered by steffen</Text>
            </Inner>
      </Box>
    )
}
