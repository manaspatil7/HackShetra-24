import React from 'react'
import { useState } from 'react';
import "./feedback.css"


export const FeedbackForm = () => {

  const hhh = ()=>{
    alert("Thankyou for Feedback");
  }

    const [rating, setRating] = useState(0);
    const [feedback, setFeedback] = useState('');
  
    const handleRatingChange = (value) => {
      setRating(value);
    };
  
    const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can handle form submission here (e.g., send data to a server)
      console.log('Rating:', rating);
      console.log('Feedback:', feedback);
    };
  
    return (
        <div className="space flex flex-row justify-center">

      <div className="feedback-form ">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value}>
                <input
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === value}
                  onChange={() => handleRatingChange(value)}
                />
                <span className="star">&#9733;</span>
              </label>
            ))}
          </div>
          <textarea
            placeholder="Enter your feedback..."
            value={feedback}
            onChange={handleFeedbackChange}
            ></textarea>
          <button type="submit" onClick={hhh}><a className='ttttt text-white' href="/home"style={{textDecoration:"none"}}>Submit</a></button>
        </form>
      </div>
            </div>
    );
  };