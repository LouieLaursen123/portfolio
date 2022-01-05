import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import FileViewer from 'react-file-viewer'
import styles from './CtaButton.module.css'

// Chakra
import { Flex, Text, Box, BoxProps, Heading, StylesProvider } from '@chakra-ui/react'

type Props = {
    projectUrl: string
    projectLinkTitle: String
} & BoxProps

export const CtaButton = ( { projectUrl, projectLinkTitle }: Props) => {
    return (
        <Box>
            <a className={styles.CtaButton} href={projectUrl} target="_blank" rel="noreferrer">
                {projectLinkTitle}
            </a>
        </Box>
    )
}
