import { useAuthState } from "../contexts/AuthContext";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Welcome from "../pages/Loginpage/Welcome";

const AuthenticatedRoute = () => {
  const { isAuthenticated } = useAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};
export default AuthenticatedRoute;
