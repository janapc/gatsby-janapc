import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  CompanyContainer,
  TitleCompany,
  Company,
  Time,
  Occupation,
  Description,
  ExperiencesContainer,
  Container
} from "./styles";
import Title from '../../Title';


const Experiences = () => {
  const data = useStaticQuery(graphql`
  query {
    contentsJson {
      experiences{
        company,
        time,
        occupation,
        description,
      }
    }
  }
  `);
  return (
    <Container id="experiences">
      <Title titleText="Experiências" />
      <ExperiencesContainer>
        {data.contentsJson.experiences.map((item, index) => (
          <CompanyContainer key={index}>
            <TitleCompany>
            <Company>
              {item.company} 
            </Company>
            <Time>{item.time}</Time>
            </TitleCompany>
            <Occupation>{item.occupation}</Occupation>
            <Description>{item.description}</Description>
          </CompanyContainer>
        ))}
      </ExperiencesContainer>
    </Container>
  );
};

export default Experiences;
