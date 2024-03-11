import React from 'react'
import { Cards } from '../cards'

export const Themap = () => {
  return (
    <div>



<div id='map' className='themap' style={{height:"90vh",width:"100vw"}}></div>

<div className="list bg-white inline-block" style={{height:"5vh"}}> </div>
<div className="list bg-white inline-block my-10" ><Cards/> </div>
<div className="list bg-white inline-block" style={{height:"5vh"}}> </div>

    </div>
  )
}
