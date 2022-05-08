import Welcome from "../pages/Loginpage/Welcome";
import ForgotPassword from "../pages/Loginpage/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Loginpage/Login";
import Signup from "../pages/Loginpage/Signup";
import { Body, Header, LoginContainer, Logo } from "../pages/Loginpage/style";
import newLogo from "../assets/icons/new logo.png";

const UnauthenticatedRoute = () => {
  return (
    <LoginContainer>
      <Header>
        <Logo src={newLogo}></Logo>
      </Header>
      <Body>
        <Routes>
          <Route path="/*" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Body>
    </LoginContainer>
  );
};

export default UnauthenticatedRoute;
