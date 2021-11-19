import React,{ useEffect, useState }  from 'react';

import { useParams } from 'react-router';
import Exterior from './Exterior';



const BuildandPrice = () => {

    let { _id } = useParams();
    const [wheelers, setWheelers] = useState([]);
    useEffect(() => {
        const uri = `https://floating-coast-28469.herokuapp.com/allcatagogy/${_id}`
        console.log(uri);
        //const uri = `https://floating-coast-28469.herokuapp.com/allcatagogy`
        fetch(uri)
        .then(res => res.json())
        .then(data => setWheelers(data[0]));
    }, []);
    //console.log(wheelers);
   
    return (
        <div>
            <Exterior wheelers={wheelers}/>
        </div>
    );
};

export default BuildandPrice;