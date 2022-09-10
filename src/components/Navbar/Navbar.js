import React,{useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
 
   
  
  return (
    <div className='header 'style={{marginBottom:'150px'}}>
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZmr2SLLIB4s9iPtS7Dc9obLPEgWCLawawDQ-RlsRR1_9WF-c4nUYN1dH549CslzPcrEw&usqp=CAU" alt="" className='img-fluid'style={{width:'100px'}} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
          <Link className="nav-link" to='/' >Home</Link>
        </li>

        <li className="nav-item">
          {/* <a className="nav-link" href="#">About Us</a> */}
          <Link className="nav-link" to='/about' >About Us</Link>
        </li>
        

       
         <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/todo' >Todo</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/form' >Form</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/invoice' >Invoice</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/invoice2' >Invoice2</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/json' >Json</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">product</a> */}
          <Link className="nav-link" to='/filter' >Filter</Link>
        </li>
       
         
       
       
      </ul>
    </div>
  </div>
</nav>
        
      
    </div>
  )
  }

export default Navbar
