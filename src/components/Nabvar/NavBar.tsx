import { GiMechanicGarage } from "react-icons/gi";
import { ENavbar } from "../../model/enums";

import { Service, ContainerNavBar } from "./Nabvar.styled";

const NavBar = () => {
  return (
    <ContainerNavBar>
      <Service
        border="4px solid var(--color-primary)"
        color="var(--color-primary)"
        fontWeigth="bold"
      >
        <GiMechanicGarage className="icon" /> {ENavbar.PR}
      </Service>
      <Service>
        <GiMechanicGarage className="icon" /> {ENavbar.AL}
      </Service>
      <Service>
        <GiMechanicGarage className="icon" /> {ENavbar.EN}
      </Service>
      <Service>
        <GiMechanicGarage className="icon" /> {ENavbar.VE}
      </Service>
    </ContainerNavBar>
  );
};

export default NavBar;
