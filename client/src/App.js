import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <>
                <Navbar />
</>
    // <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    //   <Router>
    //     <Routes>
    //       <Route path="/home">
    //         <Header />
    //         <Homepage />
    //       </Route>
    //       <Route exact path="/">
    //         <Header />
    //         <Home />
    //       </Route>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/allregister">
    //         <Allregister />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //       <PrivateRoute path="/register">
    //         <Register />
    //       </PrivateRoute>
    //       <Route path="*">
    //         <h1>404 PAGE NOT FOUND!!</h1>
    //       </Route>
    //     </Routes>
    //   </Router>
    //   <NotificationContainer />
    // </UserContext.Provider>
  );
}

export default App;
