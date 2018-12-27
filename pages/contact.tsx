import React, { Component } from "react";
import Head from "next/head";

import Box from "../components/Box";
import ContactForm from "../components/ContactForm";

import SubTitle from "../components/SubTitle";
import Text from "../components/Text";

import Link from "next/link";
import Button from "../components/Button";
import NavigationWrap from "../components/NavigationWrap";

const SuccessText = Text.extend`
  text-align: center;
  font-style: ittalic;
`;

export interface Props {}
export interface State {}

class ContantPage extends Component<Props, State> {
  public state = {
    emailSent: false
  };

  public sendMessage = (name: string, email: string, message: string) => {
    this.setState({
      emailSent: true,
      name,
      email,
      message
    });
  };

  public render() {
    const { emailSent } = this.state;

    return (
      <Box>
        <Head>
          <title>IronByte | Contact</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <SubTitle>Contact</SubTitle>

        <Text>
          You can contact us using email:{" "}
          <a href="mailto:ironbytedoo@gmail.com">
            <i>ironbytedoo@gmail.com</i>
          </a>
          <br /> <br />
          {!emailSent ? "Or use the form below:" : null}
        </Text>

        {!emailSent ? (
          <ContactForm onSubmit={this.sendMessage}>
            {(isValid, isSubmitting) => (
              <NavigationWrap>
                <Button type="submit" disabled={!isValid || isSubmitting}>
                  Send
                </Button>
                <Link href="/">
                  <Button>Back</Button>
                </Link>
              </NavigationWrap>
            )}
          </ContactForm>
        ) : (
          <>
            <SuccessText>Thank you for your message!</SuccessText>
            <NavigationWrap>
              <Link href="/">
                <Button>Back</Button>
              </Link>
            </NavigationWrap>
          </>
        )}
      </Box>
    );
  }
}

export default ContantPage;
