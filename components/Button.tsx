import styled from 'styled-components';

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

  :active, :focus {
    background-color: #ffffff50;
  }
`;

export default Button;
