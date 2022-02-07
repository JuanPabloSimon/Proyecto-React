import React from 'react';
import './App.css'

// Components 
import NavBar from './components/NavBar/NavBar';
// import CardComponent from './components/CardComponents/cardComponent';
import Header from './components/Header/header';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

// import img from './components/CardComponents/haworthiaRetusa.jpg'
// import img2 from './components/CardComponents/cordonSanJose.jpg'
// import img3 from './components/CardComponents/desconocida4.jpg'


const App = () => {
  return (
    <div className='main'>  
        <NavBar/>
        <Header/>
        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>);

};

export default App;
