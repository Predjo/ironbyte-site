import styled from "styled-components";
import { BreakPoints } from "../constants/StyleConstants";

const SubTitle = styled.h4`
  letter-spacing: 0.45em;
  font-family: Cebo;
  margin-top: 0px;
  height: 1.5rem;

  @media screen and (max-width: ${BreakPoints.small}px) {
    font-size: 0.65rem;
  }

  @media screen and (min-width: ${BreakPoints.small +
      1}px) and (max-width: ${BreakPoints.medium}px) {
    font-size: 1rem;
  }

  @media screen and (min-width: ${BreakPoints.medium + 1}px) {
    font-size: 1.3rem;
  }
`;

export default SubTitle;
