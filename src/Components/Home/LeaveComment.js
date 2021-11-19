import axios from 'axios';
import React, { useEffect, useState } from 'react';


import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Rating from 'react-rating';

import profile from './profile.png'
import "./Comment.css";





// The following component is an example of your existing Input Component
const Input = ({ label, register, required }) => (
    <>
      {/* <label>{label}</label> */}
      <textarea {...register(label, { required })} />
    </>
  );
  
  // you can use React.forwardRef to pass the ref too
  const Select = React.forwardRef(({ onChange, name, label }, ref) => (
    <>
      <label style={{color:'white',fontWeight:'700'}}>{label}</label>
      <select className='p-2' name={name} ref={ref} onChange={onChange}>
        <option value="https://i.ibb.co/6YryXKk/banner103.jpg">WANGNER</option>
        <option value="https://i.ibb.co/RBhGccc/gallary101.jpg">CHEROKEE</option>
        <option value="https://i.ibb.co/nL6qJMq/gallary101.jpg">GRAND CHEROKEE</option>
        <option value="https://i.ibb.co/SwYj2QS/Gallary102.webp">GLADIATOR</option>
        <option value="https://i.ibb.co/6YryXKk/banner103.jpg">WANGNER</option>
        <option value="https://i.ibb.co/6YryXKk/banner103.jpg">WANGNER</option>
        
      </select>
    </>
  ));




const LeaveComment = () => {
    const { register, handleSubmit } = useForm();
      
    const {user} = useAuth()
    const [comments,setComment]= useState([]);

    const [rateing,setRateing]=useState(0)
    console.log(rateing);

    useEffect(()=>{  
    const Url ='https://floating-coast-28469.herokuapp.com/comment'
    fetch(Url).then(response => response.json())
    .then(data =>setComment(data))}
    ,[])
     console.log(comments);
    const {displayName,email,photoURL} = user;

    const onSubmit = (data) => {

      
      //console.log(data);
      const {selected,comment,jeep}=data
     const commentdata = {selected,comment,jeep,rateing,displayName,email,photoURL}
     console.log(commentdata);
        const Url ='https://floating-coast-28469.herokuapp.com/comment'

        axios.post(Url,commentdata).then(res=> {
        console.log(res.data)
        if (res.data.insertedId) {
          alert('Thanks For Your Review Please Refresh To See the comment')
           const newComments = comments.filter(comment => comment._id!==0)
           
           setComment(newComments) 
           
           console.log(newComments);
         
      }
      })
      .catch(function (error) {
        console.log(error);
      });
     
    };
  
    return (
        <div>
          <p style={{fontSize:'38px',fontWeight:'600',marginTop:'15px'}}><span>OUR HAPPY</span> <span className='text-danger'> CLAINTS</span> </p>
           <div className='container  show-comment d-flex  mb-4 mt-4 mx-auto border border-1' style={{overflowX:'scroll', scrollSnapType:'proximity'}}>
            {
                comments.map( detail =>
                    {   
                      
                           const {selected,comment,jeep,rateing,displayName,email,photoURL}= detail
                        return(
                          <div className='m-2 p-2' style={{border:'solid skyblue 2px'}} >
                          <div className='d-block p-2 justify-content-between' style={{width:'310px',}}>
                               <div><img src={photoURL? photoURL : profile }  style={{height:'75px',width:'75px',borderRadius:"100%"}} alt="" /></div>
                               <div><p> <small style={{fontSize:"12px",fontWeight:'600',fontFamily:'cursive'}}>  {displayName? displayName : email } </small></p></div>
                          </div>
                          <img src={selected} alt="" className="img-fluid mb-2" style={{height:'40%',width:'100%',maxHeight:'180px'}}/>
                        
                         
                          <ul style={{listStyle:'none'}}>
                            <li>  <p>{comment}</p></li>
                            <p>{jeep}</p>
                            <li className="list-group-item info h6">Review: <Rating
    
                                   initialRating={rateing}
                                   readonly
                                   emptySymbol="far fa-star "
                                   fullSymbol="fas fa-star star"
                              /></li>
                          </ul>
                      </div>
                        )

                    })
            }
        </div>
             <div>
             <form onSubmit={handleSubmit(onSubmit)} className='cform p-4'>
                  <h4 className='text-white'>SELECT YOUR MODEL</h4>
        <Select  {...register("selected")}/>
        <h4 className='text-white'>Review Our Service</h4>
        <Input label="comment" register={register} required  className='cinput'/>
        <h4 className='text-white'>Rate Us</h4>
       <Rating
          
         onClick={(rate) => {
          setRateing(rate)
         
          alert("Thanks For Your Rating")
         }}
         />

        <h6 className='text-white'>Review The Performance of JeeP</h6>
        <Input label="jeep" register={register} required  className='cinput'/>

        
    
      <input type="submit" className='cbutton'/>
    </form>
             </div>
        </div>
    );
};

export default LeaveComment;
