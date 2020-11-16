import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
`;

export const PageNotFound = styled.h1`
  font-size: 2.4rem;
  line-height: 3.4rem;
  margin: auto;
  text-align: center;
  color: ${props => props.theme.primary};
  font-family: "Anonymous Pro", monospace;
`;
