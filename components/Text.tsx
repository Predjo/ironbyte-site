import styled from "styled-components";

export interface TextProps {
  align?: "left" | "right" | "center";
}

const Text = styled.div<TextProps>`
  font-size: 1rem;
  color: white;
  text-align: ${props => props.align || "left"};
  padding: 10px 20px;
  font-family: sans-serif;

  > a {
    color: white;
    text-decoration: none;
  }
`;

export default Text;
