import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer/Footer";
import { Container } from './styles';


function App() {
  return (
    <Container>
      <Navbar/>
    <Routes>
       <Route path='/' element={<Navigate to='/homepage'/>}/>
        <Route path='/homepage' element={<Homepage />}/>
        <Route path='/contact' element={<Contact />}/>
        {/* <Route path='/Favorites' element={<Favorites />}/> */}
    </Routes>
      <Footer/>
    </Container>
   
  );
}

export default App;
