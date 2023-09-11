import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className='section footer bg-dark text-white'>
    <div className='container'>
    <div className='row'>

    <div className='col-md-4'>
    <h5> Company Information</h5>
    <hr/>
    <p className='text-white'>
    Email Signup  social icons business location address
    Email Signup  social icons business location address
    Email Signup  social icons business location address
    Email Signup  social icons business location address
    </p>
    </div>

    <div className='col-md-4'>
    <h5> Quick Links</h5>
    <hr/>
    <p>
   <div><Link to="/">Home</Link></div>
   <div><Link to="/about">About</Link></div>
   <div><Link to="/contact">Contact</Link></div>
   <div><Link to="/">Blog</Link></div>
    </p>
    </div>

    <div className='col-md-4'>
    <h5> Contact Information</h5>
    <hr/>
      <div><p className='text-white mb-1'>#64,Banglore,India</p></div>
      <div><p className='text-white mb-1'>+91 91XXXXXXXX</p></div>
      <div><p className='text-white mb-1'>+91 91XXXXXXXX</p></div>
      <div><p className='text-white mb-1'>abc@gmail.com</p></div>
    </div>

    </div>
    </div>
    
    </section>
  )
}

export default Footer
