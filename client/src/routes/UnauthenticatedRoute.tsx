import {useAuthState } from "../contexts/AuthContext";
import Welcome from "../pages/Loginpage/Welcome";
import logo from "../assets/icons/logo.svg";
import ForgotPassword from "../pages/Loginpage/ForgotPassword";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Loginpage/Login";
import Signup from "../pages/Loginpage/Signup";
import { Body, Header, LoginContainer, Logo } from "../pages/Loginpage/style";

const UnauthenticatedRoute = () => {
  const { isAuthenticated } = useAuthState();
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`);
  return (
    <LoginContainer>
      <Header>
        <Logo src={logo}></Logo>
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
