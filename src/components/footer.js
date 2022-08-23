import React from 'react'
import './style.css';
import linkedin from "../images/social-Media/linkedin.png";
import github from "../images/social-Media/github.png";
import twitter from "../images/social-Media/tweeter.png";
import instagram from "../images/social-Media/insta.png";
import quora from "../images/social-Media/quora.png";


const Footer = () => {
  return (
    <>
    <footer className='footer background'>

    <ul>
        <li className='imageli  background'><a href='#'><img src={linkedin}/></a></li>
        <li className='imageli background'><a href='#'><img src={github}/></a></li>
        <li className='imageli background'><a href='#'><img src={twitter}/></a></li>
        <li className='imageli background'><a href='#'><img src={quora} /></a></li>
        <li className='imageli background'><a href='#'><img src={instagram}/></a></li>
      </ul>
      
    </footer>
    </>
  )
}

export default Footer