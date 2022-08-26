import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import logo from "../images/logo33.jpg";
const Navbar = () => {
  const [current,update] = useState(true);

  
  return (
    <>
      <nav  className= {current ?"navbar" : "nav-h"}>
                 <ul className={current ? "navlist" : "navlist-res"} id='navlist'>
                  <div class='logo'><img src={logo}/></div>
                   <li><NavLink to='/' onClick={()=> update( true)}>Home</NavLink></li>
                   <li><NavLink to='/about' onClick={()=> update( true)}>About_Me</NavLink></li>
                   <li><NavLink to='/qualification'onClick={()=> update( true)}>Qualification</NavLink></li>
                   <li><NavLink to='/project'onClick={()=> update( true)}>Projects</NavLink></li>
                   <li><NavLink to='/intern'onClick={()=> update( true)}>Internship</NavLink></li>
                   <li><NavLink to='/review'onClick={()=> update( true)}>Review</NavLink></li>
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