import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Components 
import NavBar from './components/NavBar/NavBar';

//views 
import Home from './Views/Home/Home';
// import Details from './Views/Details/Details';
import Contact from './Views/Contact/Contact'
import About from './Views/About/About'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return (
    <Router>
    <div className='main'>  
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </div>
    </Router>
    );

};

export default App;
