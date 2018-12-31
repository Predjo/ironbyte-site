import styled from "styled-components";
import { BreakPoints } from "../constants/StyleConstants";

const Title = styled.h1`
  letter-spacing: 0.3em;
  font-family: Cebo;
  color: white;
  margin-bottom: 20px;

  height: 1em;
  padding-top: 0.2em;

  position: relative;
  display: inline-block;

  span:not(:first-of-type):not(:nth-of-type(5)) {
    font-size: 0.8em;
  }

  @media screen and (max-width: ${BreakPoints.small}px) {
    font-size: 3rem;
  }

  @media screen and (min-width: ${BreakPoints.small +
      1}px) and (max-width: ${BreakPoints.medium}px) {
    font-size: 5rem;
  }

  @media screen and (min-width: ${BreakPoints.medium + 1}px) {
    font-size: 8rem;
  }
`;

export default Title;
