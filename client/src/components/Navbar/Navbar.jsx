import {
  NavbarContainer,
  Content,
  Logo,
  Option,
  Icon,
  LeftConatiner,
} from "./styles";
import Button from "../Button/Button";
import userIcon from "../../assets/user.svg";
import imgLogo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isSelect, isUserLogin }) => {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <LeftConatiner>
        <Logo src={imgLogo} onClick={ () => navigate('/homepage')}></Logo>
        <Content>
          <Option isSelect={true} onClick={ () => navigate('/homepage')}>Home</Option>
          <Option onClick={ () => navigate('/contact')}>Contact</Option>
          <Option onClick={ () => navigate('/Favorites')}>Favorites</Option>
        </Content>
      </LeftConatiner>
      {isUserLogin ? (
        <Icon src={userIcon}></Icon>
      ) : (
        <Content>
          <Option>Login</Option>
          <Button size={"small"}>Join</Button>
        </Content>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
