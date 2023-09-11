import React from "react";
import Slider from "../inc/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/VMC";
import img4 from '../images/img4.jpg'
import Footer from "../inc/Footer";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Company</h3>
              <div className="underline mx-auto"></div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <Link to={"/about"} className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VMC />
      
      <section className="section  border-top">
      <div className="container">
      <div className="row">
      <div className="col-md-12 mb-4 text-center">
      <h3 className="main-heading">Our Services</h3>
      <div className="underline mx-auto"></div>
      </div>

       <div className="col-md-4">
       <div className="card shadow">
       <img 
       src={img4}
       className="w-100 border-bottom"
       alt=""/>
       <div className="card-body">
       <h5>Services 1</h5>
       <div className="underline"></div>
       <p>
       The point of using Lorem Ipsum is that it has a more-or-less
       normal distribution of letters, as opposed to using 
       'Content here, content here', making it look like readable English.
       </p>
       <Link to={"/services"} className="btn btn-link">  Read More</Link>
       </div>
       </div>
          </div>



       <div className="col-md-4">
       <div className="card shadow">
       <img 
       src={img4}
       className="w-100 border-bottom"
       alt=""/>
       <div className="card-body">
       <h5>Services 1</h5>
       <div className="underline"></div>
       <p>
       The point of using Lorem Ipsum is that it has a more-or-less
       normal distribution of letters, as opposed to using 
       'Content here, content here', making it look like readable English.
       </p>
       <Link to={"/services"} className="btn btn-link">  Read More</Link>
       </div>
       </div>
          </div>


       <div className="col-md-4">
       <div className="card shadow">
       <img 
       src={img4}
       className="w-100 border-bottom"
       alt=""/>
       <div className="card-body">
       <h5>Services 1</h5>
       <div className="underline"></div>
       <p>
       The point of using Lorem Ipsum is that it has a more-or-less
       normal distribution of letters, as opposed to using 
       'Content here, content here', making it look like readable English.
       </p>
       <Link to={"/services"} className="btn btn-link">  Read More</Link>
       </div>
       </div>
          </div>



         </div>
         </div>
      </section>

  

    </div>
  );
}

export default Home;
