import { NavbarContainer, Content, Logo } from "./styles";
import imgLogo from "../../assets/logo.jpeg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={imgLogo}></Logo>
      <Content>
        <div>Home</div>
        <div>Contact</div>
        <div>Favorites</div>
      </Content>
    </NavbarContainer>
  );
};

export default Navbar;
