// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
    // <div className={'App'}>
    //   <Navbar />
    //   <div className={'container'}>
    //     <div className={'row justify-content-center align-items-center vh-100'}>
    //       <div className={'col-md-6 justify-content-center align-items-center'}>
    //         <div className={'square_wrapper'}>
    //           <div className={'square_outside'}>
    //             <div className={'square_inside'}>
    //               <p className={'text_inside_square'}>
    //                 Throughout my life, I have faced many challenges and have always persevered, approaching each obstacle 
    //                 with determination and a solutions-driven mindset.
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={'col-md-6'}>
    //         <p>This is the second column where you can add more content.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
