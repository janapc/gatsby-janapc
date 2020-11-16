import React from 'react';

import About from "./About";
import Experiences from "./Experiences";
import Skills from "./Skills";
import Education from "./Education";

import { Container } from "./styles.js";

const Main = () => {
  return (
    <Container>
      <About />
      <Experiences />
      <Skills />
      <Education />
    </Container>
  );
};

export default Main;
