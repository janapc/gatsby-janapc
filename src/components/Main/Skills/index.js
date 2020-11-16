import React from "react";
import {
  SiAdobexd,
  SiFigma,
  SiCss3,
  SiTypescript,
  SiReact,
  SiPostgresql,
  SiNodeDotJs,
  SiMongodb,
  SiJest,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

import {
  Container,
  SkillsContainer,
  SkillContainer,
  SkillTitle,
} from "./styles";
import Title from '../../Title';

const Skills = () => {
  return (
    <Container id="skills">
      <Title titleText="Habilidades" />
      <SkillsContainer>
        <SkillContainer>
          <SiAdobexd size={32} color="#FF26BE" title="Adobe XD" />
          <SkillTitle color="#FF26BE">Adobe XD</SkillTitle>
        </SkillContainer>
        <SkillContainer>
          <SiFigma size={32} color="#F24E1E" title="Figma" />
          <SkillTitle color="#F24E1E">Figma</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiCss3 size={32} color="#1572B6" title="CSS" />
          <SkillTitle color="#1572B6">CSS</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiTypescript size={32} color="#007ACC" title="Typescript" />
          <SkillTitle color="#007ACC">Typescript</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiReact size={32} color="#61DAFB" title="Reactjs" />
          <SkillTitle color="#61DAFB">Reactjs</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiPostgresql size={32} color="#336791" title="Postgresql" />
          <SkillTitle color="#336791">Postgresql</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiNodeDotJs size={32} color="#339933" title="Nodejs" />
          <SkillTitle color="#339933">Nodejs</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiMongodb size={32} color="#47A248" title="MongoDB" />
          <SkillTitle color="#47A248">MongoDB</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiJest size={32} color="#C21325" title="Jest" />
          <SkillTitle color="#C21325">Jest</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiJavascript size={32} color="#F7DF1E" title="Javascript" />
          <SkillTitle color="#F7DF1E">Javascript</SkillTitle>
        </SkillContainer>

        <SkillContainer>
          <SiHtml5 size={32} color="#E34F26" title="HTML" />
          <SkillTitle color="#E34F26">HTML</SkillTitle>
        </SkillContainer>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
