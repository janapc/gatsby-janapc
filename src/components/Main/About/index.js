import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Container, ContainerText, Text } from "./styles";
import Title from '../../Title';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      contentsJson {
        aboutMe
      }
    }
  `);

  return (
    <Container id="about">
      <Title titleText="Sobre Mim" />
      <ContainerText>
        {data.contentsJson.aboutMe.split("\n").map((item, index) => (
          <div key={index}>
            <Text>{item}</Text>
            <br />
          </div>
        ))}
      </ContainerText>
    </Container>
  );
};

export default About;
