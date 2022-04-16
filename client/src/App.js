import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer/Footer";
import { Container, MainLayout } from './styles';
import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  return (
    <Container>
      <Navbar/>
      <MainLayout>
          <SearchBar/>
      </MainLayout>
      <Footer/>
    </Container>
   
  );
}

export default App;
