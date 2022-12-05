import { AiOutlineMenu } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";

import NavBar from "../Nabvar/NavBar";

import { ButtonLogout, Logo, HeaderContainer, Container } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <AiOutlineMenu id="menuIcon" />
        <Logo />
        <ButtonLogout>
          <CgLogOff id="logoutIcon" /> Salir
        </ButtonLogout>
      </HeaderContainer>
      <NavBar />
    </Container>
  );
};
