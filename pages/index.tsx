
import Head from 'next/head';

import Link from 'next/link';
import styled from 'styled-components';
import Button from '../components/Button';

const Title = styled.h1`
  font-size: 8rem;
  letter-spacing: 0.3em;
  font-family: Cebo;
  color: white;
  margin-bottom: 5px;
`;

const Small = styled.span`
  font-size: 0.8em;
`;

const SubTitle = styled.h4`
  font-size: 1.3rem;
  letter-spacing: 0.45em;
  font-family: Cebo;
  margin-top: 0px;
`;

const NavigationWrap = styled.div`
  margin-top: 50px;
  padding: 20px;
`;

export default () => (
  <div>
    <Head>
      <title>IronByte | Index</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Title>I<Small>ron</Small>B<Small>yte</Small></Title>
    <SubTitle>Code hard and code at home</SubTitle>

    <NavigationWrap>
      <Link href="/about">
        <Button>About</Button>
      </Link>
      {' '}
      <Link href="/contact">
        <Button>Contact</Button>
      </Link>
    </NavigationWrap>
  </div>
);
