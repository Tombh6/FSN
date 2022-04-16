import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer/Footer";
export const UserContext = createContext();


function App() {
  return (
    <div>
    <Navbar/>
    <Footer/>
    </div>
  );
}

export default App;
