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
        <li className='imageli  background'><a href='https://www.linkedin.com/in/kuldeep-singh-9a3b741a6' target='_blank'><img src={linkedin}/></a></li>
        <li className='imageli background'><a href='https://github.com/KuldeepSingh00048' target='_blank'><img src={github}/></a></li>
        <li className='imageli background'><a href='https://www.twitter.com/@kuldeep87543016' target='_blank'><img src={twitter}/></a></li>
        <li className='imageli background'><a href='https://www.quora.com/profile/Kuldeep-Singh-7122' target='_blank'><img src={quora} /></a></li>
        <li className='imageli background'><a href='#' target='_blank'><img src={instagram}/></a></li>
      </ul>
      
    </footer>
    </>
  )
}

export default Footer