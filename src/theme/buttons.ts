const buttons = {
  default: {
    px: 4,
    py: 2,
    cursor: 'pointer',
    outline: 'none',
    ':active, :focus': {
      outline: 'none',
    },
  },
  black: {
    variant: 'buttons.default',
    bg: 'black',
    ':hover, :focus': {
      bg: 'gray.6',
    },
  },
}

export default buttons
