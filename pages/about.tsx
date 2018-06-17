
import Head from 'next/head';
import Box from '../components/Box';

import Text from '../components/Text';
import SubTitle from '../components/SubTitle';

export default () => (
  <Box>
    <Head>
      <title>IronByte | About</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <SubTitle>About</SubTitle>

    <Text>
      IronByte is a small web development firm.
    </Text>

  </Box>
);
