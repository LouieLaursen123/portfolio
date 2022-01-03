import { HeadingProps } from '@chakra-ui/react'

const baseStyle = (props: HeadingProps) => ({
  fontFamily: 'heading',
  fontWeight: 'semibold',
  ml: props.as !== undefined && props.as === 'h1' ? '-3px' : 0,
})

const sizes = {
  '2xl': {
    fontSize: ['5xl', null, '8xl'], // 62px 100px
    lineHeight: 1,
  },
  xl: {
    fontSize: ['4xl', null, '7xl'], // 52px 80px
    lineHeight: 1,
  },
  lg: {
    fontSize: ['3xl', null, '7xl'], // 40px 80px
    lineHeight: 1,
  },
  md: {
    fontSize: ['2xl', null, '6xl'], // 32px 64px
    lineHeight: 1,
  },
  sm: {
    fontSize: ['lg', null, '3xl'], // 22px 40px
    lineHeight: 1,
  },
  xs: {
    fontSize: ['sm', null, 'xl'], // 18px 28px
    lineHeight: 1,
  },
}

const defaultProps = {
  size: 'xl',
}

export default {
  baseStyle,
  sizes,
  defaultProps,
}
