import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(#B1295B, #E65A8D, #FC6B56);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const Name = styled.h2`
  color: ${props => props.theme.primary};
  font-family: "Roboto Mono", monospace;
  font-weight: 300;
  font-size: 2.4rem;
  line-height: 3.4rem;
  text-align: center;
`;

export const Occupation = styled.p`
  color: ${props => props.theme.secondary};
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.2rem;
  text-align: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.bgSecondary};
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 3rem 0rem;
  
  @media (min-width: 700px) {
    width: 590px;
  }
`;

export const UserField = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  border-bottom: 1px dashed ${props => props.theme.text};
  padding: 1rem 0rem;
`;

export const UserKey = styled.p`
  color: ${props => props.theme.secondary};
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.4rem;
  text-transform: uppercase;
`;

export const UserValue = styled.p`
  color: ${props => props.theme.text};
  font-family: "Anonymous Pro", monospace;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.4rem;
  word-break: break-all;
`;

export const IconsContainer = styled.div`
  align-self: center;
  margin: 1rem 0rem;
`;

export const Menu = styled.div`
  background-color: ${props => props.theme.bgSecondary};
  width: 100%;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 1.2rem;
`;

export const BtnMenu = styled.button`
  background: none;
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
  
  @media (min-width: 700px) {
    display: none;
  }
`;

export const ModalMenu = styled.nav`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -150vh;
  background: ${props => props.theme.bgSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-out;
  z-index: 1;
`;

export const MenuText = styled.a`
  color: ${props => props.theme.secondary};
  font-family: "Anonymous Pro", monospace;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.4rem;
  padding-bottom: 1rem;
  width: 90%;
  text-align: center;
  border-bottom: 1px dashed rgba(230, 90, 141, 0.4);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    color: ${props => props.theme.primary};
  }

  @media (min-width: 700px) {
    font-size: 1.8rem;
    line-height: 2.8rem;
    border-bottom: none;

    &:after {
      content: "";
      padding-right: 1rem;
      margin-right: 1rem;
      border-right: 1px solid ${props => props.theme.complementary};
    }
  }
`;

export const ToggleContainer = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.themeColor ? "#303030" : "#f7f8f9")};
  border-radius: 15px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  margin-right: 1rem;
  transition: all 0.5s ease-out;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const MenuContainer = styled.div`
  display: none;
  @media (min-width: 700px) {
    display: flex;
    margin: 0 auto;
  }
`;
