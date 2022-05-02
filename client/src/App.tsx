import "./App.css";
import { useAuthState } from "./contexts/AuthContext";

import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import UnauthenticatedRoute from "./routes/UnauthenticatedRoute";

function App() {
  const { isAuthenticated } = useAuthState();
  return isAuthenticated ? <AuthenticatedRoute /> : <UnauthenticatedRoute />;
}
export default App;
