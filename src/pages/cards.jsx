import React, { useEffect, useState } from 'react'

export const Cards = () => {

  const [big,isbig] = useState(true);
  let r= window.innerHeight/window.innerWidth;

useEffect(()=>{
  if (r<1){isbig(false)}
  else {isbig(true)}
})
  return (
    

        
<div className="row">
        <div className="col-sm-6 my-20">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Akshay kumar</h3>
              <p style={{fontFamily:'sans-serif', fontSize:30}}>Source: Bandra ..................................................... Destination: Pune</p>
              <h6 className='text-center'>Rs. 500</h6>
              <h6 className='text-center'>Duration: 2:20</h6>
              <h6 className='text-center'>Seats: 2</h6>
              <a href="/transactionmiddle" class="btn btn-primary " style={{width:"400px"}}>Book</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body flex justify-center">
              <h3 className="card-title text-center">Vikas Singh</h3>
              <p style={{fontFamily:'sans-serif', fontSize:30}}>Source: Bandra ..................................................... Destination: Pune</p>
              <h6 className='text-center'>Rs. 500</h6>
              <h6 className='text-center'>Duration: 2:30</h6>
              <h6 className='text-center'>Seats: 3</h6>
              <a href="/transactionmiddle" class="btn btn-primary" style={{width:"400px"}}>Book</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Mahesh Vallecha</h3>
              <p style={{fontFamily:'sans-serif', fontSize:30}}>Source: Bandra ..................................................... Destination: Pune</p>
              <h6 className='text-center'>Rs. 500</h6>
              <h6 className='text-center'>Duration: 1:40</h6>
              <h6 className='text-center'>Seats: 2</h6>
              <a href="/transactionmiddle" class="btn btn-primary" style={{width:"400px"}}>Book</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Rohit sharma</h3>
              <p style={{fontFamily:'sans-serif', fontSize:30}}>Source: Bandra ..................................................... Destination: Pune</p>
              <h6 className='text-center'>Rs. 500</h6>
              <h6 className='text-center'>Duration: 2:00</h6>
              <h6 className='text-center'>Seats: 1</h6>
              <a href="/transactionmiddle" class="btn btn-primary"style={{width:"400px"}}>Book</a>
            </div>
          </div>
        </div>
        
      </div>
    
  )
}

