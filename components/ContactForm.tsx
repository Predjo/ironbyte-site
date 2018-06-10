import React, { Component } from 'react';
import { Form, Text, TextArea } from 'react-form';
import Button from '../components/Button';

import { isEmail, isEmpty } from 'validator';

import styled from 'styled-components';

const StyledInput = styled(Text)`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding: 15px 10px;
  outline: none;
  display: block;
  margin-bottom: 10px;

  ::placeholder {
    color: white;
  }

`;

const StyledText = StyledInput.withComponent(TextArea);

export interface Props {}

export interface State {}

export default class ContactForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  render () {

    return (
      <Form onSubmit = { values => console.log(values) } render = { formApi => (
        <form onSubmit = { formApi.submitForm }>
          { console.log(formApi) }
          <StyledInput
            field = "name"
            placeholder = "Name"
            validate = { (value = '')  => isEmpty(value) ? 'Name is Required' : null }
           />

          <StyledInput
            field = "email"
            placeholder = "Email"
            validate = { (value = '') => isEmpty(value) || !isEmail(value) ? 'Email is Required' : null }
           />

          <StyledText
            field = "message"
            placeholder = "Message"
            validate = { (value = '')  => isEmpty(value) ? 'Message is Required' : null }
           />
          <Button type = "submit">Send</Button>
        </form>
      )} />
    );
  }
}
