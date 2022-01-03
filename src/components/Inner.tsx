import React, { ReactNode } from 'react'

// Chakra
import { Box, BoxProps } from '@chakra-ui/react'

type Props = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full'
  children: ReactNode
} & BoxProps

export const Inner = ({ size = 'lg', children, ...rest }: Props) => {
  return (
    <>
      <Box
        className={'Inner'}
        maxWidth={`container.${size}`}
        mx={'auto'}
        px={{ base: 4, sm: 6, md: 8 }}
        boxSizing={'content-box'}
        {...rest}
      >
        {children}
      </Box>
    </>
  )
}
