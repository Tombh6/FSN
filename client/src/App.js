import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer/Footer";
import { Container, MainLayout, FilterContainer } from './styles';
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from './components/Filter/Filter';
import { countryOptions } from "./mockData";

function App() {
  return (
    <Container>
      <Navbar/>
      <MainLayout>
          <SearchBar/>
          <FilterContainer>
              <Filter
                name="Location"
                value="Location"
                options={countryOptions}
                onChangeValue={(value) => {
                  // dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
              <Filter
                name="When"
                value="When"
                options={countryOptions}
                onChangeValue={(value) => {
                  // dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
              <Filter
                name="Category"
                value="Category"
                options={countryOptions}
                onChangeValue={(value) => {
                  // dispatch(filtersActions.setLanguage(value));
                }}
              ></Filter>
          </FilterContainer>
      </MainLayout>
      <Footer/>
    </Container>
   
  );
}

export default App;
