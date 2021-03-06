import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-0'>
        




 
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor:" #1c2331"}}
          >
  
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor:"dark"}}     
             >
     
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      

    
      <div>
        <a href='#' className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href='#'className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href='#'className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href='#'className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href='#'className="text-white me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href='#'className="text-white me-4">
          <i className="fab fa-github"></i>
        </a>
      </div>
    
    </section>


    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
       
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
            <h6 className="text-uppercase fw-bold">About us</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
            <span className='h1'>W</span>e are the only JEEP Certified Jeep Dealer in Bangladesh to follow the Guidelines 
                      for Good Service Qualities.
                     Following our mission to provide Customer centric service, 
                     we also offer counseling service to our Buyers regarding the travelling and adventure practice.
                      Along with this, we offer a hassel free,
                       & risk free environment to ensure the safety and protection of the travelling..
            </p>
          </div>
          

         
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 className="text-uppercase fw-bold">Campuses</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p className="text-white h-6">Dhaka</p>
            <p className="text-white h-6">Rangpur</p>
            <p className="text-white h-6">Khulna</p>
            <p className="text-white h-6">Chittagong</p>
          </div>
         
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase  fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
         <Nav className="d-flex flex-column ">       
             <NavLink 
     className='link' style={{fontWeight: "bold", fontSize:'16px',color:'white'}} 
    activeStyle={{ fontSize:'16px', fontWeight: "bold",color: "crimson"}} to="/home">Home</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'16px',color:'white'}} 
    activeStyle={{ fontSize:'16px', fontWeight: "bold",color: "crimson"}} to="/about">About</NavLink >
    <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}}  to="/ProfileDetail">Profile Detail</NavLink >
<NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}}
    activeStyle={{fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/admin">Admin Panal</NavLink >
    </Nav>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width:" 60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> Tejgao,x Road,Shop X</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01712 000 000</p>
            <p><i className="fas fa-print mr-3"></i> + 09 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
   
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2"}}
         >
      ?? 2021 Copyright:Simanto
    </div>
    
  </footer>


</div>

       
    );
};

export default Footer;