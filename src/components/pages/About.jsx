import React from 'react'
import VMC from './inc/VMC'

function About() {
  return (
    <div>
        <section className='py-4 bg-info'>
         <div className='container'>
         <div className='row'>
          <div className='col-md-4 my-auto'>
           <h1>About Us</h1>
          </div>
          <div className='col-md-8 my-auto'>
           <h6 className='float-end'>
            Home / About Us
           </h6>
          </div>
         </div>
         </div>
        </section>

        <section className='section  border-bottom'>
         <div className='container'>
          <h5 className='main-heading'>Our Comapny</h5>
          <div className='underline'></div>
          <p>
          The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content
          here, content here', making it look like readable English.
          The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content
          here, content here', making it look like readable English.
          The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content
          here, content here', making it look like readable English.
          The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content
          here, content here', making it look like readable English.
          </p>
         </div>
        </section>
     <VMC/>
    </div>
  )
}

export default About
