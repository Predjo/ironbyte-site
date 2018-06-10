
import Head from 'next/head';
import ContactForm from '../components/ContactForm';

import SubTitle from '../components/SubTitle';

export default () => (
  <div>
    <Head>
      <title>IronByte | Contact</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <SubTitle>Contact IronByte</SubTitle>

    <ContactForm />
  </div>
);
