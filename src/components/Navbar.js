import React, { useState } from 'react';
import logo from "../images/logo33.jpg";
const Navbar = () => {
  const [current,update] = useState(false);

  
  return (
    <>
      <nav  className= {current ?"navbar" : "nav-h"} id='navbar'>
                 <ul className={current ? "navlist" : "navlist-res"} id='navlist'>
                  <div class='logo'><img src={logo}/></div>
                   <li><a href='/'>Home</a></li>
                   <li><a href='/about'>About_Me</a></li>
                   <li><a href='/qualification'>Qualification</a></li>
                   <li><a href='/project'>Projects</a></li>
                   <li><a href='/intern'>Internship</a></li>
                   <li><a href='/review'>Review</a></li>
              </ul>
                  <div className={current ? "rightnav" : "rightnav-res"} id='rightnav'>
                     <a href='contact'><button>Contact</button></a> 
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