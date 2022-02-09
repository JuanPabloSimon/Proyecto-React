import React from 'react';
import Header from '../../components/Header/header';
import ItemListContainer from '../../components/itemListContainer/itemListContainer';
import './Home.css'

const Home = () => {
  return ( 
    <div className='home'>
      <Header/>
      <h2 className='homeTitle'> Productos </h2>
      <ItemListContainer/>
    </div>);
};

export default Home;
