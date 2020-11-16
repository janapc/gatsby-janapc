import React from "react";

import { Container, FooterText, TextStrong } from "./styles";

const Footer = () => {
  return (
    <Container>
      <FooterText>
        Feito por <strong>JANAPC</strong> <span role="img" aria-label="rock">🤘</span>, utilizando <TextStrong href="https://www.gatsbyjs.com/" rel="noreferrer"> Gatsby <span role="img" aria-label="heart">💜</span></TextStrong>
      </FooterText>
    </Container>
  );
};

export default Footer;
