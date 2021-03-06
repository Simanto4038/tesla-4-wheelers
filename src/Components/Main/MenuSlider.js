import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import Slider from "react-slick";
import './menu.css'


const MenuSlider = () => {
    const [wheelers, setWheelers] = useState([]);
    useEffect(() => {
        const uri = `https://floating-coast-28469.herokuapp.com/allcatagogy`
        //const uri = `https://floating-coast-28469.herokuapp.com/allcatagogy`
        fetch(uri)
        .then(res => res.json())
        .then(data => setWheelers(data));
    }, []);
    console.log(wheelers);
  
    return (
        <div className='container row mx-auto mt-4'>
       
          
          {
            wheelers.map(car => {
                const {icon,name,slogan,_id}=car
                return (
                   
                        <div key={car._id} className="col-12 col-lg-4 col-md-4 menu-img">
                            
                        <div className='d-flex flex-column '  style={{maxHeight:'300px',maxWidth:'300px'}} >
                      
                        <img  src={icon} alt="" className='img-fluid '/>
                        
                        <h6 className='fw-bolder'>{name}</h6>
                        <small>{slogan}</small>
                        <div className='mb-2'>
                        <NavLink className='link p-3'  to={`/home/build/${_id}`}  >
                        <button className='btn btn-warning fw-bold'>BUILD & PRICE </button>
                        </NavLink>

                        <NavLink className='link p-3' to={`/home/jeep/${_id}`}>
                        <button className='btn btn-warning fw-bold'> DETAIL </button>
                        </NavLink>
                        </div>
                        
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

