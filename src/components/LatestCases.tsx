import React from 'react'

// Chakra
import { Flex, Text, Box, BoxProps, Heading, Image } from '@chakra-ui/react'

type Props = {
    title: string
    image?: string
} & BoxProps

export const LatestCases = ({ title, image }: Props ) => {
    return(
        <Box>
            <Heading>{title}</Heading>
            <Image src={image} alt="" />
        </Box>
    )
}
