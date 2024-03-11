import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Navbar } from './pages/navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/home'
import { Maaap } from './pages/map'
import { Aboutus } from './pages/aboutus'
import { Help } from './pages/help'
import { Themap } from './pages/map/map'
import { setupMap } from './pages/map/script'
import { Mapdata } from './pages/map/mapdata'
import { Transaction } from './pages/transaction'
import { Transactionmiddle } from './pages/transactionmiddle'
import { Poolerform } from './pages/poolerform'
import { Authen } from './pages/auth'

function App() {


  return (
    <>

   <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/home'  exact element={<Homepage/>}/>
      <Route path='/map'   element={<Themap/>}/>
      <Route path='/aboutus'   element={<Aboutus/>}/>
      <Route path='/help'   element={<Help/>}/>
      <Route path='/mapdata' element={<Mapdata/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
      <Route path='/transactionmiddle' element={<Transactionmiddle/>}/>
      <Route path='/poolerform' element={<Poolerform/>}/>
      <Route path='/auth' element={<Authen/>}/>
    </Routes>
    </BrowserRouter>

<Footer/>
</>
  )
}





export const Footer = () => {
  return (
  <>
  <footer className='footer bg-black inline-block relative m-0' >
  <div className="container ">
      <footer className="aaa bg-black text-center text-white" >
        <div className="container p-4 pb-0">
          <section className="mb-4">
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"><img src="./src/assets/images/fac.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-twitter"><img src="./src/assets/images/x.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-google"><img src="./src/assets/images/gog.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-instagram"><img src="./src/assets/images/inst.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-linkedin-in"><img src="./src/assets/images/linkedin.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
              <i className="fab fa-github"><img src="./src/assets/images/git.jpeg"  style={{height:"40px",}} alt="" /></i>
            </a>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
          © 2020 Copyright:
          <a className="text-white" >EcoDrive.com</a>
        </div>
      </footer>
    </div>  </footer>
  </>
  );
}



export default App
