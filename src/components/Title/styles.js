import styled, { keyframes } from 'styled-components';

const borderPulsate = keyframes`
  from {border-right-color: #B1295B}
  42%{border-right-color: #E65A8D}
  to {border-right-color: transparent}
`;

export const Text = styled.h1`
  font-size: 3.4rem;
  line-height: 4.4rem;
  color: ${props => props.theme.title};
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  border-right: 2px solid;
  margin-top: 3.2rem;
  align-self: center;
  width: fit-content;
  border-right: 1px solid #B1295B;
  animation: ${borderPulsate} 0.7s infinite;
  
  @media (min-width: 700px) {
    align-self: start;
  }
`;