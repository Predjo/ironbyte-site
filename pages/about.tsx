import Head from "next/head";
import Box from "../components/Box";

import Text from "../components/Text";
import SubTitle from "../components/SubTitle";

import Link from "next/link";
import Button from "../components/Button";
import NavigationWrap from "../components/NavigationWrap";

import styled from "styled-components";

const SmallText = styled(Text)`
  font-size: 0.7em;
`;

const Separator = styled.div`
  height: 3em;
`;

export default () => (
  <Box>
    <Head>
      <title>IronByte | About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <SubTitle>About</SubTitle>
    <Text align="center">
      IronByte is a small web development firm founded in 2018 with a sole
      purpose of enabling developers in Croatia to work remotly for
      international startups.
    </Text>

    <Separator />

    <SubTitle>Legal</SubTitle>

    <SmallText align="center">
      IronByte društvo s ograničenom odgovornošću za računalne usluge, Ulica
      Ivane Brlić-Mažuranić 72, Zagreb.
      <br />
      Društvo je upisano u sudski registar trgovačkog suda u Zagrebu, pod brojem
      081143551, OIB 00776157454.
      <br />
      Temeljni kapital društva iznosi 20.000,00 Kn i uplaćen je u cijelosti u
      novcu.
      <br />
      Privredna banka Zagreb d.d., Radnička cesta 50, Zagreb. IBAN:
      HR0323400091110911978 SWIFT: PBZGHR2X
      <br />
      Član uprave i direktor: Nikola Predovan
    </SmallText>

    <br />

    <NavigationWrap>
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </NavigationWrap>
  </Box>
);
