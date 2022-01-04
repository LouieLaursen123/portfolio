import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import FileViewer from 'react-file-viewer'

// Chakra
import { Flex, Text, Box, BoxProps, Heading } from '@chakra-ui/react'

type Props = {
    projectUrl: string
    projectLinkTitle: String
} & BoxProps

export const CtaButton = ( { projectUrl, projectLinkTitle }: Props) => {
    return (
        <Box py={'1.5rem'} px={'1.5rem'} fontSize={'1rem'} border={'solid'} borderWidth={'1px'}>
            <a href={projectUrl} target="_blank" rel="noreferrer">
                {projectLinkTitle}
            </a>
        </Box>
    )
}
