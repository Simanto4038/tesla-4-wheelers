import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Slider from "react-slick";
import './menu.css'


const MenuSlider = () => {
    const [wheelers, setWheelers] = useState([]);
    useEffect(() => {
        const uri = `http://localhost:5000/allcatagogy`
        //const uri = `https://floating-coast-28469.herokuapp.com/allcatagogy`
        fetch(uri)
        .then(res => res.json())
        .then(data => setWheelers(data));
    }, []);
    console.log(wheelers);
  
    return (
        <div className='row mt-4'>
       
          
          {
            wheelers.map(car => {
                const {icon,name,slogan,_id}=car
                return (
                   
                        <div key={car._id} className="col-12 col-lg-2 col-md-4 menu-img">
                            
                        <div className='d-flex flex-column '  style={{maxHeight:'300px',maxWidth:'300px'}} >
                        <NavLink className='link'  to={`/home/jeep/${_id}`}>
                        <img  src={icon} alt="" className='img-fluid '/>
                        </NavLink>
                        <h6>{name}</h6>
                        <small>{slogan}</small>
                        </div>
                        
                        </div>
                    
                )
            }

            )
          }
          
       
        </div>
    );
};

export default MenuSlider;

