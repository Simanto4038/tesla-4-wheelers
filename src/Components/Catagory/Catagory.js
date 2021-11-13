import React, { useEffect, useState } from 'react';
import useCatagories from '../../hooks/useCatagories';
import MenuSlider from '../Main/MenuSlider';

const Catagory = () => {

   
    
    return (
        <div>
         <MenuSlider/> 
             
        </div>
    );
};

const CatagoryShow = (props)=>
{
    console.log(props.car);
    const {name,slogan,icon}=props.car
    return(
        <div>
            <img src={icon} alt="" />
            <h6>{name}</h6>
            <small>{slogan}</small>
        </div>
    )
}

export default Catagory;