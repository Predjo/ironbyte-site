import React, { Component } from 'react';
import Head from 'next/head';

import Box from '../components/Box';
import ContactForm from '../components/ContactForm';

import SubTitle from '../components/SubTitle';
import Text from '../components/Text';

const SuccessText = Text.extend`
  text-align: center;
  font-style: ittalic;
`;

export interface Props {}
export interface State {}

class ContantPage extends Component<Props, State> {

  state = {
    emailSent: false,
  }

  sendMessage (name, email, message) {
    this.setState ({
      emailSent: true
    })
    console.log(name, email, message);
  }

  render () {

    const { emailSent } = this.state;

     return (
      <Box>
        <Head>
          <title>IronByte | Contact</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <SubTitle>Contact</SubTitle>

        <Text>
          You can contact us using email: <a href="mailto:ironbytedoo@gmail.com">ironbytedoo@gmail.com</a>
          <br /> <br />
          Or use the form below:
        </Text>

        { !emailSent ?
           <ContactForm onSubmit = { (name, email, message) => this.sendMessage(name, email, message) } /> : 
           <SuccessText>Thank you for your message!</SuccessText>
        }
      </Box>
    );
  }
}

export default ContantPage;
