import React from 'react'
import linkedin from '../images/linkedin.png'
const Review = () => {
  return (
    <div className='rmiddle'>
      <div className='animate'>
        <img src={linkedin} al='animation'></img>
      </div>
      <form className='form'>
      <div className='feedback'>
      <input autocomplete="off" id="search" placeholder="Enter your Name" />
      <input autocomplete="off" id="search" placeholder="Enter your E-Mail" />
      <textarea className='content' autocomplete="off" id="search" placeholder="Plzz Write Your Feedback " />
      <a href='#'><input type='submit' className='button' /></a>
      < input type='reset' className='button' />
      </div>
      </form>
      
      </div>
  )
}

export default Review