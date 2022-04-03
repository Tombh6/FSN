import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allregister from "./components/Allregister/Allregister";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Routes>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/allregister">
            <Allregister />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route path="*">
            <h1>404 PAGE NOT FOUND!!</h1>
          </Route>
        </Routes>
      </Router>
      <NotificationContainer />
    </UserContext.Provider>
  );
}

export default App;
