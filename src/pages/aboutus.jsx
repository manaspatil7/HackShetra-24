import React from 'react'
import "./aboutus.css"

export const Aboutus = () => {
  return (
    <div >
       <AboutUs/>
      <Main/>
    </div>
  )
}



export const AboutUs = () => {
  return (
    <div className='AboutUs'>
      About Us
    </div>
  )
}


export const Main = () => {
  return (
    <div className='main'>
      <div className='block'>
        <div className='main1'>
            <h5>Our Vision</h5>
            <p>Our vision is simple yet profound: to transform urban mobility by promoting eco-friendly transportation options. We believe that a cleaner planet begins with the choices we make every day. By choosing EcoDrive, you're not just getting from point A to B – you're contributing to a sustainable future.</p>
        </div>
        <div>
          <img style={{height:'250px'}} src='https://www.micronicsindia.com/wp-content/uploads/2021/01/Our-Vision-1.jpg'/>
        </div>
      </div>

      <div className='block'>
        <div>
          <img style={{height:'250px'}} src='https://img.freepik.com/free-vector/teamwork-concept-landing-page_23-2148191420.jpg?w=2000'/>
        </div>
        <div className='main1'>
            <h5>Our Team</h5>
            <p>EcoDrive is powered by a team of dedicated individuals who share a passion for sustainability and innovation. Our diverse team brings together expertise from various fields, including technology, transportation, and environmental science. Together, we're driving positive change for the planet.</p>
        </div>
      </div>

      <div className='block'>
        <div className='main1'>
            <h5>Join the EcoDrive Movement</h5>
            <p>By choosing EcoDrive, you're not just choosing a ride – you're joining a movement. Together, we can pave the way for a cleaner and greener future. Join us in making responsible choices for our planet, one ride at a time.</p>
        </div>
        <div>
          <img style={{height:'250px'}} src='https://img.freepik.com/free-vector/organic-flat-join-us-concept_23-2148948357.jpg'/>
        </div>
      </div>
      

    </div>
  )
}
