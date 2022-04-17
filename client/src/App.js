import React, { createContext, useState } from "react";
import "./App.css";
import Homepage from "./features/Homepage/Homepage";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import Footer from "./components/Footer/Footer";
import { Container, MainLayout, FilterContainer, ArticlesContainer, BodyContainer, DataContainer } from './styles';
import SearchBar from "./components/SearchBar/SearchBar";
import Filter from './components/Filter/Filter';
import { countryOptions, MockCard } from "./mockData";
import Card from "./components/Card/Card";
import Articles from "./components/Articles/Articles";

function App() {
  return (
    <Container>
      <Navbar/>
      <SearchBar/>       
      <MainLayout>
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
         
          <BodyContainer>
            <DataContainer>
               <ArticlesContainer>
                    {/* <Card title={MockCard.title} description={MockCard.description} dates={MockCard.dates} image={MockCard.image} /> */}
                    <Articles results={30} articles={MockCard}/>
               </ArticlesContainer>
               </DataContainer>
          </BodyContainer>
          
      </MainLayout>
      <Footer/>
    </Container>
   
  );
}

export default App;
