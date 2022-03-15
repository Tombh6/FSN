import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Allregister from "./components/Allregister/Allregister";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
export const UserContext = createContext();

/*function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

   //---------------Add your components via html----------/

    );
  }
  
  export default App;*/
  