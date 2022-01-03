import { extendTheme } from '@chakra-ui/react'
import { Styles } from '@chakra-ui/theme-tools'
import { createBreakpoints } from '@chakra-ui/theme-tools'

import Heading from './components/heading'
import Popover from './components/popover'

const styles: Styles = {
  global: {
    body: {
      fontFamily: 'body',
      fontSize: ['xs', null, 'sm'],
      color: 'text',
      background: 'background',
    },
  },
}

const breakpoints = createBreakpoints({
  sm: '37.5em', // 600px
  md: '56.25em', // 900px
  lg: '75em', // 1200px
  xl: '112.5em', // 1800px
})

const sizes = {
  'header-mobile': '80px',
  'header-desktop': '90px',
  footer: '300px',
}

const shadows = {
  'list-shadow': '4.69484px 4.69484px 0px #000000',
}

const container = {
  xs: '450px',
  sm: '550px',
  md: '750px',
  lg: '1110px',
  xl: '1280px',
  '2xl': '1440px',
  '3xl': '1800px',
  '4xl': '2280px',
  full: '100%',
}

const fonts = {
  heading: `Syne, sans-serif`,
  body: `Inconsolata, monospace`,
  mono: `Inconsolata, monospace`,
}

const fontSizes = {
  '3xs': '0.75rem', // 12px
  '2xs': '0.875rem', // 14px
  xs: '1rem', // 16px
  sm: '1.125rem', // 18px
  md: '1.25rem', // 20px
  lg: '1.375rem', // 22px
  '2lg': '1.5rem', // 24px
  xl: '1.75rem', // 28px
  '2xl': '2rem', // 32px
  '3xl': '2.5rem', // 40px
  '4xl': '3.25rem', // 52px
  '5xl': '3.875rem', // 62px
  '6xl': '4rem', // 64px
  '7xl': '5rem', // 80px
  '8xl': '6.25rem', // 100px
  '9xl': '5rem',
  '10xl': '6rem',
  '11xl': '7rem',
  '12xl': '8rem',
  '13xl': '9rem',
  '14xl': '10rem',
}

const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#FFF',
  text: '#000',
  background: '#FFF',

  gray: {
    400: '#CCCCCC',
    600: '#D2D7D2',
    700: '#DDDDDD',
  },

  orange: {
    500: '#FF6633',
    600: '#FF6600',
    700: '#FF5B2B',
    800: '#FF9966',
  },

  yellow: {
    500: '#FFCC33',
  },

  blue: {
    400: '#3C78FF',
    500: '#3366FF',
  },

  green: {
    400: '#23BB56',
    500: '#33CC66',
  },

  red: {
    500: '#FF0033',
  },

  purple: {
    500: '#CC33FF',
  },
}

const theme = extendTheme({
  styles,
  breakpoints,
  sizes: {
    ...sizes,
    container,
  },
  space: {
    ...sizes,
  },
  fonts,
  fontSizes,
  colors,
  shadows,
  components: {
    Heading,
    Popover,
  },
})

export default theme