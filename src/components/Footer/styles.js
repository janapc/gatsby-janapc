import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${props => props.theme.bgSecondary};
  padding: 1rem;
`;

export const FooterText = styled.p`
  font-size: 1.6rem;
  line-height: 2.6rem;
  color: ${props => props.theme.secondary};
  font-family: "Anonymous Pro", monospace;
  text-align: center;
  background: -webkit-linear-gradient(#b1295b, #e65a8d, #fc6b56);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextStrong = styled.a`
  font-weight: 700;
`;
