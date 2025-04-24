// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
// import About from './Components/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
