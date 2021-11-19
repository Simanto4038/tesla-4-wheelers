import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductUpLoad from './ProductUpLoad';

const AdminHandle = () => {
    return (
        <div>

<div className='row g-5 m-5'>
                <div className="col-12 col-lg-4 col-md-6">
                <NavLink className='link' to="/manageAllorders">    
                    <button className='btn btn-danger w-100 p-5'> <i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>Manage All Orders</h3> </button>
                </NavLink >    
                </div>
                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/managetestDate">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>Manage All Test Drive</h3> </button>
               </NavLink >
                 </div>
                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/productUpload">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>UPLOAD NEW PRODUCT</h3> </button>
               </NavLink >
                 </div>
                <div className="col-12 col-lg-4 col-md-6"> 
                <NavLink className='link' to="/adminMake">

                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>MAKE NEW ADMIN</h3> </button>
               </NavLink >
                 </div>

                <div className="col-12 col-lg-4 col-md-6"> 

                <NavLink className='link' to="/manageAllproducts">
                <button className="btn btn-danger w-100 p-5" ><i className="fas fa-tools" style={{fontSize:'42px'}}></i> <h3>MANAGE ALL PRODUCTS</h3> </button>
               </NavLink >
                 </div>
            </div>
            
        </div>
    );
};

export default AdminHandle;