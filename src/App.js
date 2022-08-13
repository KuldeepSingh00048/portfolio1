import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/home';
import About from './components/about';
import Qualification from './components/qualification';
import Project from './components/project';
import Intern from './components/intern';
import Contact from './components/contact';
import Footer from './components/footer';
import Review from './components/review';
import {Routes,Route} from "react-router-dom";
const App = () => {
  return (
<>
      {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route exact path="/"  element={<Home/>} />
      
        <Route path='/about' element={<About/>} />
       
        <Route path='/qualification' element={<Qualification/>} />
         
        <Route path='/project' element={<Project/>} />
       
        <Route path='/intern' element={<Intern/>} />
         
        <Route path='/review' element={< Review/>} />

        <Route path='/contact' element={< Contact/>} />
       
      </Routes> 
      <Footer />
      {/* </BrowserRouter>  */}
      </>
  )
}

export default App
