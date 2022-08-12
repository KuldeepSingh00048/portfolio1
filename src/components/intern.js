import React from 'react'
import saip from "../images/saip.jpg";
import intern from "../images/intern.jpg";

const Intern = () => {
  return (
    <div className='imiddle'>
    <div className='intern'>
      <h1> SAIP</h1>
      <img src={saip}></img>
      <ul>
          <li><a className='text'>Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'> Discover Learning with AI & Data Science</a></a></li>
          <li><a className='text'>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>1 Month</a></a></li>
          <li><a className='text'>Organisation :   <a className='textli'>IILM College AHL,AKTU </a></a></li>
          <li><a className='text'>Designation &nbsp;:   <a className='textli'>Trainee</a></a></li>
      </ul>   
    </div>
    <div className='intern'>
      <h1> The Intern Academy</h1>
      <img src={intern}></img>
      <ul>
          <li><a className='text'>Title &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'> To automate Social Media(instagram) using Python</a></a></li>
          <li><a className='text'>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>1 Month</a></a></li>
          <li><a className='text'>Organisation :   <a className='textli'>The Intern Academy</a></a></li>
          <li><a className='text'>Designation &nbsp;:   <a className='textli'>Python Programer</a></a></li>
      </ul>   
    </div>
    </div>
  )
}

export default Intern