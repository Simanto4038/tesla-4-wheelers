import React, { useEffect, useState } from 'react';

const useComment = () => {
  
        const [comments,setComment]= useState([]);



        useEffect(()=>{  
        const Url ='http://localhost:5000/comment'
        fetch(Url).then(response => response.json())
        .then(data =>setComment(data))}
        
    ,[])

    
    return ([comments,setComment]);
};

export default useComment;