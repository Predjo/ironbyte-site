import React from "react";
import App, { Container } from "next/app";

import styled, { injectGlobal } from "styled-components";

import Footer from "../components/Footer";

import { ToastContainer } from "react-toastify";

import "reset-css";
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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
          <Content>
            <Component {...pageProps} />
          </Content>
          <Footer>IronByte © {new Date().getFullYear()}</Footer>
        </Layout>

        <ToastContainer />
      </Container>
    );
  }
}
