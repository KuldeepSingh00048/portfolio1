import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Contact = () => {
  const navigate = useNavigate();
  const[user,setUser] = useState({
    name:"",
    Phone_number:"",
    email:""
  })
  const handleChange = e =>{
    const{name,value} = e.target
    setUser({
      ...user,
      [name]:value
    })
  }
  const contact =()=>{
    const {name,email,Phone_number} = user
    if(name && email && Phone_number){
      alert("posted")
      axios.post("https://kd-profile-server.herokuapp.com/contact", user)
      .then(res => alert(res.data.message))
      navigate('/')
    }
    else{
      alert("invalid")
    }
  }
  return (
    <div className='cmiddle'>
      <div className='contact'>
	      
          <h1> Get in touch with Us</h1>
		      <input type="text"  placeholder="Enter your name" 
          name='name'
          value={user.name}
          onChange={handleChange}
          />
          <br />	
		      <input type="text" placeholder="Enter your Phone Number" 
          name='Phone_number'
          value={user.Phone_number}
          onChange={handleChange}
          />
          <br />
		      <input type="email" placeholder="Enter your Email address"
          name='email'
          value={user.email}
          onChange={handleChange}
          />
          <br />
          <button onClick={contact}>Contact Us</button>
		      <h4>We will Contact u soon</h4>
	      
      </div>  
    </div>
  )
}

export default Contact