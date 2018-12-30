import React, { Component } from "react";
import Head from "next/head";

import Box from "../components/Box";
import ContactForm from "../components/ContactForm";

import SubTitle from "../components/SubTitle";
import Text from "../components/Text";

import Link from "next/link";
import Button from "../components/Button";
import NavigationWrap from "../components/NavigationWrap";

import { toast } from "react-toastify";

import styled from "styled-components";

const SuccessText = styled(Text)`
  text-align: center;
  font-style: ittalic;
`;

export interface Props {}
export interface State {
  emailSent: boolean;
}

class ContantPage extends Component<Props, State> {
  public state = {
    emailSent: false
  };

  public sendMessage = (
    name: string,
    email: string,
    message: string,
    done: () => void
  ) => {
    const showError = () => {
      toast.error("There was a problem with sending your message.", {
        position: toast.POSITION.BOTTOM_RIGHT
      });

      done();
    };

    fetch("/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then(data => {
        if (data.status !== 200) {
          throw new Error();
        }

        toast.info("Message send successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });

        done();

        this.setState({
          emailSent: true
        });
      })
      .catch(() => {
        showError();
        done();
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
