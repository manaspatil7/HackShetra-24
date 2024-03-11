import React from 'react'
import "./home.css"


export const Homepage = () => {
  return (
    <div className='hhomee'>

<div className="universe">
        <div className="homediv">

          <div classNameName="banner">
          <div className="buttons">
              <button type="button" class="btn btn-secondary btn-lg bg-black" ><a href='/map' className='hhhh text-white'style={{textDecoration:"none"}} >Get a Ride</a></button>
              <button type="button" class="btn btn-secondary btn-lg bg-black"><a href='/poolerform' className='hhhh text-white' style={{textDecoration:"none"}}>Carpooler</a></button>
            </div>

            <div className='textoverimage'>EcoDrive: The Green, Cost-Efficient Choice</div>
            <img src="./src/assets/images/banner.jpeg" style={{ height: '65vh', width: '100vw' }} alt="" />
          </div>
          <div className="homedown">
            <div className="homedown1">
              <h4>Your pick of rides at low prices</h4>
              <p>No matter where you’re going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.</p>
            </div>
            <div className="homedown1">
              <h4>Trust who you travel with</h4>
              <p>We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.</p>
            </div>
            <div className="homedown1">
              <h4>Scroll, click, tap and go!</h4>
              <p>Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.</p>
            </div>
          </div>
        </div>
        <div className="safety flex absolute">
          <div className="safetyimage">
            <img src="./src/assets/images/safety.jpeg" height={300} alt="" />
            <h1 style={{ padding: '100px 20px 0 20px', color: 'white' }}>Your safety is our priority.<br /> Together, we make every ride a secure journey</h1>
          </div>
        </div>
      </div>
  
  </div>
  )
}
