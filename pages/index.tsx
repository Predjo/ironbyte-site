
import Head from 'next/head';

import Link from 'next/link';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: Cebo;
    src: url('static/fonts/cebo.otf') format('opentype');
  }
`;

const Title = styled.h1`
  color: black;
  font-size: 50px;
  font-family: Cebo;
`;

const Small = styled.span`
  font-size: 0.8em;
`;

export default () => (
  <div>
    <Head>
      <title>IronByte | Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Title>10000110</Title>
    <Title>1<Small>r0n</Small>B<Small>yte</Small></Title>
    <Title>I<Small>ron</Small>B<Small>yte</Small></Title>

    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      {' '}
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  </div>
);
