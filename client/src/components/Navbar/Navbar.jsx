import { NavbarContainer, Content, Logo } from "./styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo></Logo>
      <Content>
        <div>Home</div>
        <div>Contact</div>
        <div>Favorites</div>
      </Content>
    </NavbarContainer>
  );
};

export default Navbar;
