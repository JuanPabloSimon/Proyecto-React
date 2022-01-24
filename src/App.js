import React from 'react';
import './App.css'

// Components 
import NavBar from './components/NavBar/NavBar';
import CardComponent from './components/CardComponents/cardComponent';
import Header from './components/Header/header';

const App = () => {
  return (
    <div>  
        <NavBar/>
        <Header/>
        <CardComponent 
        name= 'Hawortia Retusa'
        value='valor en pesos'
        carac='características' />
    </div>);

};

export default App;
