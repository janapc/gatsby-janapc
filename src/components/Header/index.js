import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  IoLogoDribbble,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoIosMenu,
  IoIosClose,
  IoIosMoon,
  IoIosSunny,
} from "react-icons/io";

import Img from "gatsby-image";

import { useThemeColor } from "../../contexts/themeColor";

import {
  Info,
  Name,
  Occupation,
  UserContainer,
  UserField,
  UserKey,
  UserValue,
  IconsContainer,
  Menu,
  ModalMenu,
  MenuText,
  BtnMenu,
  ToggleContainer,
  MenuContainer,
  Container
} from "./styles";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { themeColor, changeTheme } = useThemeColor();
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      contentsJson {
        user {
          address
          age
          email
          name
          occupation
          phoneNumber
          twitter
          github
          dribbble
          linkedin
        }
      }
    }
  `);

  return (
    <Container>
      <Info>
        <Menu>
          <BtnMenu onClick={() => setToggleMenu(!toggleMenu)}>
            <IoIosMenu size={34} color="#B1295B" />
          </BtnMenu>

          <MenuContainer>
            <MenuText href="#about">sobre</MenuText>
            <MenuText href="#experiences">Experiência</MenuText>
            <MenuText href="#skills">habilidades</MenuText>
            <MenuText href="#education">Educação</MenuText>
          </MenuContainer>

          <ToggleContainer
            onClick={() => changeTheme()}
            themeColor={themeColor}
          >
            {!themeColor && <IoIosSunny size={24} color="#FFC600" />}
            {themeColor && <IoIosMoon size={24} color="#4C5367" />}
          </ToggleContainer>
        </Menu>
        <ModalMenu style={{ top: toggleMenu ? 0 : "" }}>
          <IoIosClose
            size={54}
            color="#B1295B"
            style={{ top: 20, alignSelf: "flex-start" }}
            onClick={() => setToggleMenu(!toggleMenu)}
          />

          <MenuText href="#about" onClick={() => setToggleMenu(!toggleMenu)}>
            sobre
          </MenuText>
          <MenuText
            href="#experiences"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            Experiência
          </MenuText>
          <MenuText href="#skills" onClick={() => setToggleMenu(!toggleMenu)}>
            habilidades
          </MenuText>
          <MenuText
            href="#education"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            Educação
          </MenuText>
        </ModalMenu>

        <Img
          style={{
            height: "100%",
            width: "100%",
            marginTop: 10,
            borderRadius: 4,
          }}
          fadeIn={false}
          loading="eager"
          fluid={data.profile.childImageSharp.fluid}
          alt="Photo of Jana"
        />

        <UserContainer>
          <Name>{data.contentsJson.user.name}</Name>
          <Occupation>{data.contentsJson.user.occupation}</Occupation>
          <UserField>
            <UserKey>Email:</UserKey>
            <UserValue>{data.contentsJson.user.email}</UserValue>
          </UserField>

          <UserField>
            <UserKey>Idade:</UserKey>
            <UserValue>{data.contentsJson.user.age}</UserValue>
          </UserField>

          <UserField>
            <UserKey>Telefone:</UserKey>
            <UserValue>{data.contentsJson.user.phoneNumber}</UserValue>
          </UserField>

          <UserField>
            <UserKey>Endereço:</UserKey>
            <UserValue>{data.contentsJson.user.address}</UserValue>
          </UserField>
          <IconsContainer>
            <a href={data.contentsJson.user.dribbble} rel="noreferrer">
              <IoLogoDribbble
                size={34}
                color="#B1295B"
                style={{ marginRight: "1rem" }}
                title="Dribble"
              />
            </a>

            <a href={data.contentsJson.user.github} rel="noreferrer">
              <IoLogoGithub
                size={34}
                color="#B1295B"
                style={{ marginRight: "1rem" }}
                title="Github"
              />
            </a>

            <a href={data.contentsJson.user.twitter} rel="noreferrer">
              <IoLogoTwitter
                size={34}
                color="#B1295B"
                style={{ marginRight: "1rem" }}
                title="Twitter"
              />
            </a>
            <a href={data.contentsJson.user.linkedin} rel="noreferrer">
              <IoLogoLinkedin size={34} color="#B1295B" title="Linkedin" />
            </a>
          </IconsContainer>
        </UserContainer>
      </Info>
    </Container>
  );
};
export default Header;
