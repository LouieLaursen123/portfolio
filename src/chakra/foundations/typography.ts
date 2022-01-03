const typography = {
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  
    lineHeights: {
      normal: 'normal',
      none: '1',
      shorter: '1.25',
      short: '1.375',
      base: '1.5',
      tall: '1.625',
      taller: '2',
    },
  
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
  
    fonts: {
      heading: `Syne, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      body: `Inconsolata, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      mono: `Inconsolata, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    },
  
    fontSizes: {
      '2xs': '0.75rem',
      xs: '0.875rem',
      sm: '0.9375rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.75rem',
      '4xl': '2rem',
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '3rem',
      '8xl': '4rem',
      '9xl': '5rem',
      '10xl': '6rem',
    },
  }
  
  export type Typography = typeof typography
  
  export default typography