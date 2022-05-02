import ReactDOM from "react-dom";
import "./index.css";
import GlobalStyle from "./globalStyle/globalStyle";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);
