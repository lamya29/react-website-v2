import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Components/pages/HomePage/Home'
import Services from './Components/pages/Services/Services';
import Products from './Components/pages/Products/Products';
import SignUp from './Components/pages/SignUp/SignUp';
import Footer from './Components/pages/Footer/Footer';

function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/services' element={<Services />} />
         <Route path='/products' element={<Products />} />
         <Route path='/signup' element={<SignUp />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
