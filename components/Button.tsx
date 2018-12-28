import styled from "styled-components";
import { BreakPoints } from "../constants/StyleConstants";

const Button = styled.button`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  padding: 15px 20px;
  outline: none;
  min-width: 150px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  font-size: 1rem;

  :active {
    background-color: #ffffff50;
  }

  :disabled {
    background-color: #ffffff50;
    cursor: not-allowed;
  }

  @media (max-width: ${BreakPoints.small}px) {
    display: block;
    width: 100%;
  }
`;

export default Button;
