import React from 'react'

function Contact() {
  return (
         <div>
         <section className='py-4 bg-info'>
         <div className='container'>
         <div className='row'>
          <div className='col-md-4 my-auto'>
           <h1>Contact Us</h1>
          </div>
          <div className='col-md-8 my-auto'>
           <h6 className='float-end'>
            Home / Contact Us
           </h6>
          </div>
         </div>
         </div>
        </section>


        <section className='section'>
        <div className='container'>
        <div className='card shadow'>
        <div className='card-body'>
          <div className='row'>
          <div className='col-md-6'>
          <h5>Contact Form</h5>
          <hr/>
          <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
          </div>

          <div className='col-md-6 border-start'>
          
          <h5 className='main-heading'>Address Information</h5>
         <div className='underline'></div>
         <p>
          64, Kapurthala, Lucknow, UP, India
         </p>
         <p>
          Phone : +91 91XXXXXXXX
         </p>
         <p>
          Email : abc@gmail.com
         </p>

          </div>

          </div>
        </div>
        </div>
        </div>        
        </section>
         </div>
  )
}

export default Contact
