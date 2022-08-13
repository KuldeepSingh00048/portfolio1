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
import pic from './images/instagram.jpg'
import linkedin from "./images/linkedin.png";
import instagram from "./images/instagram.jpg";
import quora from "./images/quora.png";
import twitter from "./images/twitter2.jpg";

// const About = () => {
//   return (
//     <div className='middle'>
//       <h1>About</h1>
//       <div className='ablock'>
//         <div className='pic'>
//           <img src={pic}></img>
//           <ul>
//             <li className='imageli'><a href='#'><img src={linkedin}/><a className='textli' href='#'> linkedin</a></a></li>
//             <li className='imageli'><a href='#'><img src={instagram}/><a className='textli' href='#'>instagram</a></a></li>
//             <li className='imageli'><a href='#'><img src={quora} /><a className='textli' href='#'>quora</a></a></li>
//             <li className='imageli'><a href='#'><img src={twitter}/><a className='textli' href='#'>twitter</a></a></li>
//           </ul>
//         </div>
//         <div className='content'> Hello, I am kuldeep Singh
//         I always been sci-fi lover at first,long before
//         I stumbled in making websites. It all started 
//         with creating AI & ML based projects when i was 
//         in 2nd year of my Batcholor's, until the day i 
//         study about javscript and discovered another 
//         feild to express myself.
//         <br/>
//         <br/>
//         Creating website is become one of the most important part of my working
//         I feel very satisfy after making thye diffrent websites that i can connect
//         with. Even i find my self get indulge in them with full of fun.
//         <br/>
//         <br/>
//         There's no surprise that creating a websites is like addiction in my life, but
//         I also like to work on AI &ML , I'am endlessly inspired by the new inventions 
//         in the feild of Artificial Intelligence
//         </div>
//       </div>
//     </div>
//   )
// }



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
