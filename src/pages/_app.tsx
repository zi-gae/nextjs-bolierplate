import React from 'react'
import type { AppProps } from 'next/app'
import { NextPageContext, NextComponentType } from 'next'
import { ThemeProvider } from 'emotion-theming'
import { Reset } from 'styled-reset'
import theme from '~theme/theme'
import MainTemplate from '~components/Template/Main'

interface ForGetInitialProps {
  Component: NextComponentType
  ctx: NextPageContext
}

const RootApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <MainTemplate>
        <Reset />
        <Component {...pageProps.props} />
      </MainTemplate>
    </ThemeProvider>
  )
}

RootApp.getInitialProps = async ({ Component, ctx }: ForGetInitialProps) => {
  let pageProps = {}

  if (Component.getInitialProps) pageProps = await Component.getInitialProps({ ...ctx })

  return { pageProps }
}

export default RootApp
