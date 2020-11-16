import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
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
