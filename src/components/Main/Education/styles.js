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
  
  @media(min-width: 700px) {
    align-self: start;
  }
`;

export const SubTitle = styled.h2`
  font-size: 2.2rem;
  line-height: 3.2rem;
  color: ${props => props.theme.title};
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  margin: 1rem 0rem;
`;

export const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.09);
  background-color: ${props => props.theme.card};
  border-radius: 4px;
  padding: 0.5rem;

  @media (min-width: 700px) {
    display: flex;
    padding: 2rem;
  }
`;

export const Time = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${props => props.theme.complementary};
  font-family: "Anonymous Pro", monospace;
  text-align: center;

  @media (min-width: 700px) {
    margin-right: 2rem;
  }
`;

export const Name = styled.p`
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: ${props => props.theme.text};
  font-family: "Roboto", sans-serif;
`;

export const CoursesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CourseContainer = styled.div`
  margin: 1rem 0rem;
  text-align: center;
  width: 100%;
  padding: 1rem;
  border: 1px solid ${props => props.theme.complementary};
  border-radius: 8px;

  @media (min-width: 700px) {
    width: max-content;
    margin-right: 1rem;
  }
`;

export const CourseText = styled.a`
  font-size: 1.2rem;
  line-height: 2.2rem;
  color: ${props => props.theme.primary};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
