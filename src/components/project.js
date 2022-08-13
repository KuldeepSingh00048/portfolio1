import React from 'react'
import quiz from '../images/quiz.png'
import converter from '../images/converter.jpg'
import vlog from '../images/vlog.jpg'
import robot from '../images/robot.jpg'
import face from '../images/face.png'
import pluto from '../images/pluto.png'

const Project = () => {
  return (
    <div className='pmiddle'>
      <div className='pfeild'>
        <h1> Web development Projects</h1>
        <div className='p'>
          <a className='project' href='#'><img src={quiz} /> <div><h3> The Quiz</h3></div> <div className='div'>
          This is converter site having <br/>
          several units which convert the<br/>
           one unit to another</div></a>
          <a className='project' href='#'><img src={converter} /> <div><h3> The Converter</h3></div><div className='div'>
          This is aptitude quiz containing <br/>
          several questions which may surprise<br/>
           you and blow your mind</div></a>
          <a className='project' href='#'><img src={vlog} /> <div><h3> Vlogs</h3></div><div className='div'>
          This is vlog site having <br/>
          several facts and view which <br/>
          may surprise you</div></a>
        </div>
      </div>
      <div className='pfeild'>
        <h1> Python Projects(ML and AI)</h1>
        <div className='p'>
          <a className='project' href='https://kd-robo.netlify.app/'><img src={robot} /> <div><h3> Robotic Hand</h3></div><div className='div'>
          This is the Project we made in college  its a  <br/>
         dummy hand which copying your hand movement<br/>
          using ML & Deep Learning will surely blow your mind</div></a>
          <a className='project' href='#'><img src={face} /> <div><h3> Facial Expression Recognitio</h3></div><div className='div'>
          This is the Project we made in college <br/>
          it recognise our 7 types of expression through WebCam<br/>
          using Neural Networking, ML & Deep Learning will surely blow your mind</div></a>
          <a className='project' href='#'><img src={pluto} /> <div><h3> Pluto</h3></div><div className='div'>
          This is my favourite Project I made in college <br/>
          its acts as a persnol assistant just like siri/cortana<br/>
          using ML and SpeechRecognition and i am still working on it.</div></a>
        </div>
      </div>
    </div>
  )
}

export default Project
