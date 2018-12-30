import React from "react";

import { BreakPoints } from "../constants/StyleConstants";

import { withFormik } from "formik";
import * as Yup from "yup";

import styled from "styled-components";

const StyledForm = styled.form`
  padding: 10px;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
`;

const StyledInput = styled.input`
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

  :disabled {
    background-color: #ffffff50;
    cursor: not-allowed;
  }

  @media (max-width: ${BreakPoints.small}px) {
    display: block;
    width: calc(100% - 10px);
  }
`;

const StyledText = styled(StyledInput)`
  display: block;
  margin-bottom: 35px;
  width: calc(100% - 10px);
  height: 75px;
`;

export interface Props {
  onSubmit: (
    name: string,
    email: string,
    message: string,
    done: () => void
  ) => void;
}

export interface Values {
  name: string;
  email: string;
  message: string;
}

export interface State {}

const ContactForm = props => {
  const {
    isValid,
    values,
    // touched,
    // errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    // handleReset,
    // dirty
    children
  } = props;

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        id="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
      />

      <StyledInput
        id="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
      />

      <StyledText
        id="message"
        placeholder="Message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={isSubmitting}
      />
      {children(isValid, isSubmitting)}
    </StyledForm>
  );
};

const EnhancedContactForm = withFormik<Props, Values>({
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required")
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    setSubmitting(true);
    props.onSubmit(values.name, values.email, values.message, () => {
      setSubmitting(false);
    });
  }
})(ContactForm);

export default EnhancedContactForm;
