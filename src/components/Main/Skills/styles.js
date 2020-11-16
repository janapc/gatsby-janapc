import styled from "styled-components";

export const Container = styled.section`
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(230, 90, 141, 0.4);
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
`;

export const SkillTitle = styled.p`
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: ${props => props.color};
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
`;
