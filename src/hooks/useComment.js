import React, { useEffect, useState } from 'react';

const useComment = () => {
  
        const [comments,setComment]= useState([]);



        useEffect(()=>{  
        const Url ='https://floating-coast-28469.herokuapp.com/comment'
        fetch(Url).then(response => response.json())
        .then(data =>setComment(data))}
        
    ,[])

    
    return ([comments,setComment]);
};

export default useComment;