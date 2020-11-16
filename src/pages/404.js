import React from "react";

import { Container, PageNotFound } from "./styles";

export default function Home() {
  return (
    <Container>
      <PageNotFound>
        The page isn't found! <span role="img">😔</span>
      </PageNotFound>
    </Container>
  );
}
