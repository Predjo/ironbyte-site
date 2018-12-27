import styled from "styled-components";

import { BreakPoints } from "../constants/StyleConstants";

const NavigationWrap = styled.div`
  margin-top: 50px;
  padding: 20px;
  text-align: center;
  display: inline-flex;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;

  > button {
    margin: 0px 3px;
  }

  @media (max-width: ${BreakPoints.small}px) {
    display: flex;
    flex-direction: column;

    > button {
      margin: 3px 3px;
      flex: 1;
    }
  }
`;

export default NavigationWrap;
