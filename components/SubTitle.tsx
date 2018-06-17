import styled from 'styled-components';
import { BreakPoints } from '../constants/StyleConstants';

const SubTitle = styled.h4`
  font-size: 1.3rem;
  letter-spacing: 0.45em;
  font-family: Cebo;
  margin-top: 0px;
  height: 1.5rem;

  @media (max-width: ${ BreakPoints.small }px) {
    font-size: 1rem;
  }

`;

export default SubTitle;
