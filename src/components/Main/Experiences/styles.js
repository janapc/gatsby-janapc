import styled from "styled-components";

export const Container = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const Title = styled.h1`
  font-size: 3.4rem;
  line-height: 4.4rem;
  color: ${props => props.theme.title};
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  border-right: 2px solid;
  margin-top: 3.2rem;
  align-self: center;
  width: fit-content;

  @media (min-width: 700px) {
    align-self: start;
  }
`;

export const ExperiencesContainer = styled.div`
  height: max-content;
`;

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  border-bottom: 1px dashed rgba(230, 90, 141, 0.2);
  padding-bottom: 1rem;

  :last-child {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(230, 90, 141, 0.4);
  }
  @media (min-width: 700px) {
    align-items: start;
  }
`;

export const TitleCompany = styled.div`
  display: flex;
  align-items: center;
`;

export const Company = styled.p`
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: ${props => props.theme.primary};
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  margin-right: 1rem;
`;

export const Time = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${props => props.theme.text};
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
`;

export const Occupation = styled.span`
  color: ${props => props.theme.complementary};
  font-size: 1.2rem;
  line-height: 2.2rem;
  font-style: italic;
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
`;

export const Description = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.2rem;
  line-height: 2.2rem;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  text-indent: 1rem;
  text-align: justify;
`;
