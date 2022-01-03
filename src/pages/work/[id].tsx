import React from 'react'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { cases } from '../../data/cases'

// Chakra
import { Flex, Text, Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react'

export const Work = ({ cases }) => {
    const router = useRouter()

    const { id } = router.query
    console.log(id);

    return(
        <Box>
            <Heading>{cases.title}</Heading>
        </Box>
    )
}

export default Work
