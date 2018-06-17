import React, { Component } from 'react';
import { Form, Text, TextArea } from 'react-form';
import Button from '../components/Button';

import { isEmail, isEmpty } from 'validator';

import { BreakPoints } from '../constants/StyleConstants';

import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 10px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledInput = styled(Text)`
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding: 15px 10px;
  outline: none;
  display: inline-block;
  margin-bottom: 10px;
  width: calc(50% - 10px);
  margin-left: 5px;
  margin-right: 5px;
  box-sizing: border-box;

  ::placeholder {
    color: white;
  }

  @media (max-width: ${ BreakPoints.small }px) {
    display: block;
    width: 100%;
  }
`;

const StyledText = styled(StyledInput.withComponent(TextArea))`
  display: block;
  margin-bottom: 35px;
  width: calc(100% - 10px);
  height: 75px;
`;

export interface Props {
  onSubmit: (name: string, email:string, message: string) => void;
}

export interface State {}

export default class ContactForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  render () {

    const { onSubmit } = this.props;

    return (
      <Form onSubmit = { ({ name, email, message }) => onSubmit(name, email, message) } render = { formApi => (
        <StyledForm onSubmit = { formApi.submitForm }>

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

        </StyledForm>
      )} />
    );
  }
}
