import React from "react";
import './App.css'
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import {Route,Routes, BrowserRouter,} from "react-router-dom";


function App() {
  return (
  <BrowserRouter>
  <div>
  <Navbar/>

  <Routes>
  <Route exact path="/" Component={Home} />
  <Route  path="/About" Component ={About}/>
  <Route   path= "/Contact" Component ={Contact}/>
  </Routes>
 
  <Footer/>
  </div>
  </BrowserRouter>
  );
}

export default App;
