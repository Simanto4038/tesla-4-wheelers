import React from 'react';
import { NavLink } from 'react-router-dom';

const ShoppingTool = () => {
    return (
        <div >
            <div className='row g-5 m-5'>
                <div className="col-12 col-lg-6 col-md-6">
                <NavLink className='link' to="/drive">    
                    <button className='btn btn-danger w-100 p-5'> <i className="fas fa-truck-pickup" style={{fontSize:'42px'}}></i> <h3>TAKE A TEST DRIVE</h3> </button>
                </NavLink >    
                </div>
                <div className="col-12 col-lg-6 col-md-6"> 
                <NavLink className='link' to="/models">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>BUILD YOUR JEEP AND GET THE PRICE</h3> </button>
               </NavLink >
                 </div>
            </div>
        </div>
    );
};

export default ShoppingTool;