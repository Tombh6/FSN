
import { NavbarContainer, Content, Logo, Option, Icon } from './styles';
import Button from '../Button/Button';
import userIcon from '../../assets/user.png';
import imgLogo from "../../assets/logo.jpeg";

const Navbar = ({isSelect, isUserLogin}) => {
    return (
        <NavbarContainer>
             <Logo src={imgLogo}></Logo>
            <Content>
                <Option isSelect={true}>Home</Option>
                <Option>Contact</Option>
                <Option>Favorites</Option>
            </Content>
            {!isUserLogin ? <Icon src={userIcon}></Icon> :
            <Content>
                <Option>Login</Option>
                <Button size={"small"}>Join</Button>
            </Content>}
        </NavbarContainer>
    )
}

export default Navbar;
