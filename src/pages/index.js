import React from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <SEO />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}
