import Head from "next/head";
import Box from "../components/Box";

import Text from "../components/Text";
import SubTitle from "../components/SubTitle";

import Link from "next/link";
import Button from "../components/Button";
import NavigationWrap from "../components/NavigationWrap";

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

    <br />

    <NavigationWrap>
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </NavigationWrap>
  </Box>
);
