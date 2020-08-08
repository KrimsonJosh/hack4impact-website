import App from 'next/app'
import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'HK Grotesk';
    src: local('HK Grotesk'),
        local('HKGrotesk-Regular'),
        url('/assets/fonts/hkgrotesk-regular.woff2') format('woff2'),
        url('/assets/fonts/hkgrotesk-regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'HK Grotesk';
    src: local('HK Grotesk'),
        local('HKGrotesk-Bold'),
        url('/assets/fonts/hkgrotesk-bold.woff2') format('woff2'),
        url('/assets/fonts/hkgrotesk-bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'HK Grotesk', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1, h2, h3 {
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />;
        <GlobalStyle />
      </>
    )
  }
}
