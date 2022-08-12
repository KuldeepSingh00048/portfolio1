import React from 'react'
import './style.css';
import linkedin from "../images/linkedin.png";
import instagram from "../images/instagram.jpg";
import quora from "../images/quora.png";
import twitter from "../images/twitter2.jpg";


const Footer = () => {
  return (
    <>
    <footer className='footer background'>

    <ul>
        <li className='imageli  background'><a href='#'><img src={linkedin}/></a></li>
        <li className='imageli background'><a href='#'><img src={instagram}/></a></li>
        <li className='imageli background'><a href='#'><img src={quora} /></a></li>
        <li className='imageli background'><a href='#'><img src={twitter}/></a></li>
      </ul>
      
    </footer>
    </>
  )
}

export default Footer