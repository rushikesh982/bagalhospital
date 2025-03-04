import React from 'react';
import  { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import './App.css';
import Home from './home/Home';
import Navbar from './header/Navbar';
import About from './aboutus/About';
import Services from './services/Services';
import Department from './department/Department';
import Gallery from './gallery/Gallery';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/services' element={<Services/>}></Route>
            <Route path='/department' element={<Department/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </Router>
        
    </>
  );
}

export default App;
