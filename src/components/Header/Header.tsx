import { AiOutlineMenu } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import NavBar from "../Nabvar/NavBar";
import { ButtonPagination } from "../Results/Result.styled";

import {
  ButtonLogout,
  Logo,
  HeaderContainer,
  Container,
} from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <AiOutlineMenu id="menuIcon" />
        <ButtonPagination
          onClick={() =>
            Swal.fire({
              title: "¿Deseas regresar al inicio?",
              showDenyButton: true,
              showCancelButton: false,
              confirmButtonText: `Si`,
              denyButtonText: `No`,
              confirmButtonColor: "var(--color-green)",
              denyButtonColor: "var(--color-primary)",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.replace("/");
              } else {
                window.location.replace("/carlist");
              }
            })
          }
        >
          <Link to="/">
            <Logo />
          </Link>
        </ButtonPagination>

        <ButtonLogout>
          <CgLogOff id="logoutIcon" /> Salir
        </ButtonLogout>
      </HeaderContainer>
      <NavBar />
    </Container>
  );
};
