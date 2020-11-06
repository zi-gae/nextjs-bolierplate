import buttons from './buttons'

const theme = {
  breakpoints: ['36em', '48em', '62em', '75em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    main: '#f70061',
    subBlue: '#558bcf',
    subGreen: '#32de00',
    black: '#141414',
    gray: {
      0: '#f5f5f5',
      1: '#eeeeee',
      2: '#dddddd',
      3: '#cccccc',
      4: '#999999',
      5: '#666666',
      6: '#333333',
    },
    point: {
      red: '#ff0000',
      blue: '#007bff',
      purple: '#4e3ce8',
      green: '#0fdb14',
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {},
  buttons,
}

export default theme
