import React from 'react';
import App, { Container } from 'next/app';

import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: Cebo;
    src: url('static/fonts/cebo.otf') format('opentype');
  }

  html, body {
    background: #0F2027;
    background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
    color: white;
    font-size: 15px;
  }
`;

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
`;

export default class MyApp extends App {

  props: any;

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component { ...pageProps } />
         </Layout>
      </Container>
    );
  }
}
