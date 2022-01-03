import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { Router } from 'next/router'
import { useRouter } from 'next/router'
import { theme } from "@chakra-ui/theme"

function MyApp({ Component, pageProps }) {

  const colors = [
    theme.colors.blue[500],
    theme.colors.green[500],
    theme.colors.red[500],
    theme.colors.orange[500],
    theme.colors.yellow[500],
    theme.colors.purple[500],
  ]

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component backgroundColor={'red.500'} {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
