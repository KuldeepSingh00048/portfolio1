import React from 'react'
import batchelor from "../images/qualification/batchelors.png"
import intermediate from "../images/qualification/intermediate.png"
import matriculation from "../images/qualification/matriculation.jpg"

const Qualification = () => {
  return (
    <div className='qmiddle'>
      <div className='quali hoverquali'>
        <h1> Batcholor's</h1>
        <img src={batchelor}></img>
        <ul>
            <li><a className='text'>From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'> IILM College AHL , AKTU</a></a></li>
            <li><a className='text'>Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>Greater Noida</a></a></li>
            <li><a className='text'>Passing Year :   <a className='textlib'>Pursuing</a></a></li>
            <li><a className='text'>Percentage &nbsp;&nbsp;:   <a className='textli'>73% (till now)</a></a></li>
        </ul>   
      </div>
      <div className='quali'>
        <h1> Intermediate</h1>
        <img src={intermediate}></img>
        <ul>
            <li><a className='text'>From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>TATA D.A.V Public School , WBD</a></a></li>
            <li><a className='text'>Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>Ramgarh, Jharkhand</a></a></li>
            <li><a className='text'>Passing Year:   <a className='textli'>2019</a></a></li>
            <li><a className='text'>Percentage &nbsp;&nbsp;:   <a className='textli'>76%</a></a></li>
        </ul>   
      </div>
      <div className='quali'>
        <h1> Matriculation</h1>
        <img src={matriculation}></img>
        <ul>
            <li><a className='text'>From &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>TATA D.A.V Public School , WBD</a></a></li>
            <li><a className='text'>Place &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   <a className='textli'>Ramgarh, Jharkhand</a></a></li>
            <li><a className='text'>Passing Year:   <a className='textli'>2017</a></a></li>
            <li><a className='text'>Percentage &nbsp;&nbsp;:   <a className='textli'>72%</a></a></li>
        </ul>   
      </div>
    </div>
  )
}

export default Qualification