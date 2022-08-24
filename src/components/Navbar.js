import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import logo from "../images/logo33.jpg";
const Navbar = () => {
  const [current,update] = useState(false);

  
  return (
    <>
      <nav  className= {current ?"navbar" : "nav-h"} id='navbar'>
                 <ul className={current ? "navlist" : "navlist-res"} id='navlist'>
                  <div class='logo'><img src={logo}/></div>
                   <li><NavLink to='/'>Home</NavLink></li>
                   <li><NavLink to='/about'>About_Me</NavLink></li>
                   <li><NavLink to='/qualification'>Qualification</NavLink></li>
                   <li><NavLink to='/project'>Projects</NavLink></li>
                   <li><NavLink to='/intern'>Internship</NavLink></li>
                   <li><NavLink to='/review'>Review</NavLink></li>
              </ul>
                  <div className={current ? "rightnav" : "rightnav-res"} id='rightnav'>
                     <NavLink to='contact'><button>Contact</button></NavLink> 
                 </div> 
                
                 <button className='burger' onClick={()=> update(!current)}>
                  <div className='line'></div>
                  <div className='line'></div>
                  <div className='line'></div>
                 </button>
      </nav>
        
    </>
  )
}

export default Navbar