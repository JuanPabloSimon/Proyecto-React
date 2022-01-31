import React from 'react';
import './App.css'

// Components 
import NavBar from './components/NavBar/NavBar';
import CardComponent from './components/CardComponents/cardComponent';
import Header from './components/Header/header';

import img from './components/CardComponents/haworthiaRetusa.jpg'
import img2 from './components/CardComponents/cordonSanJose.jpg'
import img3 from './components/CardComponents/desconocida4.jpg'


const App = () => {
  return (
    <div>  
        <NavBar/>
        <Header/>
        <div className='CardContainer'>                                                                                                                                                                                                                                                   
        <CardComponent 
        name= 'Hawortia Retusa'
        value='valor en pesos'
        carac='características'
        img={img} />
        <CardComponent
        name= 'Cordon de San Jose'
        value='valor en pesos'
        carac='características'
        img={img2} />
        <CardComponent
        name= 'Nariz de Borracho'
        value='valor en pesos'
        carac='características'
        img={img3}/>
        </div>
        
    </div>);

};

export default App;
