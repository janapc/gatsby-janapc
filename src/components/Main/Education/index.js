import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  Container,
  SubTitle,
  Card,
  Time,
  Name,
  CoursesContainer,
  CourseContainer,
  CourseText,
} from "./styles";
import Title from '../../Title';

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      contentsJson {
        education {
          time
          name
        }
        courses {
          name
          link
        }
      }
    }
  `);
  return (
    <Container id="education">
      <Title titleText="Educação" />
      <>
        <SubTitle>Educação:</SubTitle>
        <Card>
          <Time>{data.contentsJson.education.time}</Time>
          <Name>{data.contentsJson.education.name}</Name>
        </Card>
      </>
      <>
        <SubTitle>Cursos:</SubTitle>
        <CoursesContainer>
          {data.contentsJson.courses.map((courses, index) => (
            <CourseContainer key={index}>
              <CourseText href={courses.link} rel="noreferrer">
                {courses.name}
              </CourseText>
            </CourseContainer>
          ))}
        </CoursesContainer>
      </>
    </Container>
  );
};

export default Education;
