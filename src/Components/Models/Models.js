import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useCatagories from '../../hooks/useCatagories';
import ModelDetail from './ModelDetail';

const Models = () => {

    const [wheelers, setWheelers] = useCatagories();

    console.log(wheelers);
    return (
        <div className='container mx-auto row g-4 mt-5'>
            {
                wheelers.map(jeep=> {
                    return (
                        <div key={jeep._id} className="col-lg-4 col-md-6 col-12 ">
                        <ModelDetail  jeep={jeep}/>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default Models;