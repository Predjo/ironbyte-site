import styled from 'styled-components';
import { BreakPoints } from '../constants/StyleConstants';


const Title = styled.h1`
  font-size: 8rem;
  letter-spacing: 0.3em;
  font-family: Cebo;
  color: white;
  margin-bottom: 30px;
  height: 7rem;
  position: relative;
  display: inline-block;

  > span:not(:first-of-type):not(:nth-of-type(5)) {
    font-size: 0.8em;
  }

  @media (max-width: ${ BreakPoints.small }px) {
    font-size: 5rem;
    height: 4.8rem;
  }

`;

export default Title;
