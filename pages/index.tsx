import React, { Component } from "react";

import Head from "next/head";
import Link from "next/link";

import Box from "../components/Box";
import Button from "../components/Button";
import MainTitle from "../components/MainTitle";
import NavigationWrap from "../components/NavigationWrap";

export interface Props {}
export interface State {}

export default class Index extends Component<Props, State> {
  public render() {
    return (
      <Box>
        <Head>
          <title>IronByte | Index</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <MainTitle title="IronByte" subTitle="Code hard and code at home" />

        <NavigationWrap>
          <Link href="/about">
            <Button>About</Button>
          </Link>
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </NavigationWrap>
      </Box>
    );
  }
}
