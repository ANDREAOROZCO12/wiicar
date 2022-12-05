import { MdOutlineCarRental,MdOutlineDirectionsCarFilled, MdRepeatOne,MdLocalOffer  } from "react-icons/md";
import { ENavbar } from "../../model/enums";

import { Service, ContainerNavBar} from "./Nabvar.styled";

const NavBar = () => {
  return (
    <ContainerNavBar>
      <Service
        border="4px solid var(--color-primary)"
        color="var(--color-primary)"
        fontWeigth="bold"
      >
        <MdOutlineCarRental className="icon" /> {ENavbar.PR}
      </Service>
      <Service>
        <MdOutlineDirectionsCarFilled className="icon" /> {ENavbar.AL}
      </Service>
      <Service>
        <MdLocalOffer className="icon" /> {ENavbar.EN}
      </Service>
      <Service>
        <MdRepeatOne className="icon" /> {ENavbar.VE}
      </Service>
    </ContainerNavBar>
  );
};

export default NavBar;
