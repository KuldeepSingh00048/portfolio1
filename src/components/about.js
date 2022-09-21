import React from 'react'
import pic from "./kuldeep.jpg";
import linkedin from "../images/social-Media/linkedin.png";
import github from "../images/social-Media/github.png";
import twitter from "../images/social-Media/tweeter.png";
import instagram from "../images/social-Media/insta.png";
import quora from "../images/social-Media/quora.png";

const About = () => {
  return (
    <div className='middle'>
      <h1>About Me</h1>
      <div className='ablock'>
        <div className='pic'>
          <img className='userpic' src={pic}></img>
          <ul>
            <li className='imageli'><a href='#'><img src={linkedin}/><a className='textli' href='https://www.linkedin.com/in/kuldeep-singh-9a3b741a6' target='_blank'> Linkedin</a></a></li>
            <li className='imageli'><a href='#'><img src={github}/><a className='textli' href='https://github.com/KuldeepSingh00048' target='_blank'> GitHub</a></a></li>
            <li className='imageli'><a href='#'><img src={twitter}/><a className='textli' href='https://www.twitter.com/@kuldeep87543016' target='_blank'>Twitter</a></a></li>
            <li className='imageli'><a href='#'><img src={quora} /><a className='textli' href='https://www.quora.com/profile/Kuldeep-Singh-7122' target='_blank'>Quora</a></a></li>
            <li className='imageli'><a href='#'><img src={instagram}/><a className='textli' href='#' target='_blank'>Instagram</a></a></li>
          </ul>
        </div>
        <div className='content'> Hello, I am kuldeep Singh
        I always been sci-fi lover at first,long before
        I stumbled in making websites. It all started 
        with creating AI & ML based projects when i was 
        in 2nd year of my Batchelor's, until the day i 
        study about javascript and discovered another 
        feild to express myself.
        <br/>
        <br/>
        Creating website is become one of the most important part of my working,
        I feel very satisfy after making the different websites that i can connect
        with. Even i find my self get indulge in them with full of fun.
        <br/>
        <br/>
        And I think  that creating a websites is become addiction of my life, but
        I also like to work on AI &ML , I'am endlessly inspired by the new innovations 
        in the feild of Artificial Intelligence
        </div>
      </div>
    </div>
  )
}

export default About