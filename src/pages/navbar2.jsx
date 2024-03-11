import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar2.css"
import { Testttt } from '../assets/images/test'
import { signInWithPopup } from 'firebase/auth'
import { auth,provider } from '../config/firebase-config'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export const Navbar2 = () => {
    // const nav = useNavigate()
  

  return (
    <>


    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      
    <a className="nav-link" ><div className="space inline-block" style={{width:"2vw" , height:"2vw"}}></div></a>
  <a className="navbar-brand" href="/home">   EcoDrive</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='/home' >
        <div class="dropdown"><button class="dropbtn">Home</button></div>
           </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/map">
          
        <div class="dropdown">
  <button class="dropbtn">Map</button>
  <div class="dropdown-content">
    <a href="#">lets gooooo</a>
    <a href="/transaction">transaction</a>
    <a href="/mapdata">mapdata</a>
    
  </div>
</div>

        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aboutus">  <div class="dropdown"><button class="dropbtn">About Us</button></div></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/help">  <div class="dropdown"><button class="dropbtn">Help</button></div></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><div className="space inline-block" style={{width:"67vw"}}></div></a>
      </li>
      
    </ul>



    <form className="form-inline my-2 my-lg-0 flex flex-row-reverse">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="1em"
      viewBox="0 0 448 512"
      style={{ fill: '#ffffff' }}
    >
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    </svg>
    
    </form>
  </div>
</nav>
    </>

  )
}
