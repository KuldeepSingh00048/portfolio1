import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import reviewpic from './reviewpic.gif'


const Review = () => {

  const navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",
    email:"",
    feedback:""
  })
  const handleChange = e =>{
    const{name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  const review =()=>{
    const {name,email,feedback} = user
    if(name && email &&feedback){
      // alert("posted")
      axios.post("https://kd-profile-server.herokuapp.com/review", user)
      .then(res => alert(res.data.message))
      navigate('/')
    }
    else{
      alert("invalid")
    }
  }
  return (
    <div className='rmiddle'>
      <div className='animate'>
        Please <br/>Review
      </div>
      <form className='form'>
      <div className='feedback'>
      <input autocomplete="off" id="search" placeholder="Enter your Name"  name='name'
      value={user.name}
      onChange={handleChange}
      />
      <input autocomplete="off" id="search" placeholder="Enter your E-Mail" name='email'
      value={user.email}
      onChange={handleChange}
      />
      <textarea className='content' autocomplete="off" id="search" placeholder="Plzz Write Your Feedback " name='feedback'
      value={user.feedback}
      onChange={handleChange}
      />
      <a href='#'><input type='submit' className='button' onClick={review}/></a>
      < input type='reset' className='button' />
      </div>
      </form>
      
      </div>
  )
}

export default Review