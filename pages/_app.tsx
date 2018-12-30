import React from "react";
import App, { Container } from "next/app";

import styled, { injectGlobal } from "styled-components";
import { BreakPoints } from "../constants/StyleConstants";

import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    height: 100vh;
    margin: 0;
    padding: 0;

    #__next {
      height: 100vh;
      margin: 0;
      padding: 0;
    }
  }
`;

const Layout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  height: calc(100% - 50px);
  justify-content: center;
  align-items: center;
  display: flex;
  padding-bottom: 50px;
  overflow: auto;

  @media screen and (max-height: ${BreakPoints.tiny}px) {
    align-items: flex-start;
  }
`;

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public props: any;

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
          <Footer>IronByte © {new Date().getFullYear()}</Footer>
        </Layout>

        <ToastContainer />
      </Container>
    );
  }
}
