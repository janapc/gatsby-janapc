import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 3.4rem;
  line-height: 4.4rem;
  color: ${props => props.theme.title};
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  margin-top: 3.2rem;
  border-right: 2px solid;
  align-self: center;
  width: fit-content;
  
  @media(min-width: 700px) {
    align-self: start;
  }
`;

export const ContainerText = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(230, 90, 141, 0.4);
`;

export const Text = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  line-height: 2.2rem;
`;
