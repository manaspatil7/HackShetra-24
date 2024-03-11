import React from 'react'
import "./help.css"

export const Help = () => {
  return (
    <div className="kkkk inline-block ">
       
      <Main/>
    </div>
  )
}







export const Main = () => {
  return (
    <>
       <div className='Container'>
        <h2> Eco-Drive Help Centre </h2> 
        <div className='Container1'>How can we Help You ?</div>
        <div className='questions'>
         
          <div className='ques-ans'> <h3>How do I book a carpool ride?</h3>
          <p >You can book a carpool ride on our mobile app, or on blablacar.com. Simply search for your destination, choose the date you want to travel and pick the carpool that suits you best! Some rides can be booked instantly, while other rides require manual approval from the driver. Either way, booking a carpool ride is fast, simple and easy.</p></div>
         
          <div className='ques-ans'> <h3>How do I cancel my carpool ride?</h3>
          <p>If you have a change of plans, you can always cancel your carpool ride from the ‘Your rides’ section of our app. The sooner you cancel, the better. That way the driver has time to accept new passengers. The amount of your refund will depend on how far in advance you cancel. If you cancel more than 24 hours before departure, for example, you’ll receive a full refund, excluding the service fee.</p></div>
          
          <div className='ques-ans'> <h3>How much does a carpool ride cost?</h3>
          <p>The costs of a carpool ride can vary greatly, and depend on factors like distance, time of departure, the demand of that ride and more. It is also up to the driver to decide how much to charge per seat, so it’s hard to put an exact price tag on a ride. Check out some of our top carpool destinations to get an idea of price, or start searching for your next carpool ride on blablacar.com.</p></div>
          
          <div className='ques-ans'> <h3>How do I start carpooling?</h3>
          <p>Carpooling with BlaBlaCar is super easy, and free! Simply sign up for an account and tell us some basic details about yourself. Once you have a BlaBlaCar account, you can start booking or publishing rides directly on our app or website.</p></div>

          <div className='ques-ans'> <h3>What are the benefits of travelling by carpool?</h3>
          <p>There are multiple advantages to carpooling, over other means of transport. Travelling by carpool is usually more affordable, especially for longer distances. Carpooling is also more eco-friendly, as sharing a car means there will be fewer cars on the road, and therefore fewer emissions. Taking a carpool ride is also a safe way to travel in the current times. Because there are only a few people in a car, you have fewer points of contact and there’s less risk than other travel options.</p></div>
        </div>
    </div>
    </>
  )
}