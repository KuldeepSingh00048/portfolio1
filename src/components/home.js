import React from 'react'
import {NavLink} from 'react-router-dom'
const Home = () => {
  return (
    <section className='hmiddle background'>
      <div className='hblock'>
        <h1>Hi,</h1>
        <h3>It's me Kuldeep Singh</h3>
        <div className='quote'> "Website without visitors is like
         a ship lost in horizon"</div>     
         <div>--Dr. Christopher dayagdag</div>
      </div>
      <button className='hbutton'><NavLink to='/about'>Know More</NavLink></button>
    
    </section>
  )
}

export default Home