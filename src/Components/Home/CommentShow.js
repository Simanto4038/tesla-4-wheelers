import React from 'react';
import profile from './profile.png'
const CommentShow =(props)=>
{      
    const {selected,comment,displayName,email,photoURL}= props.comment
    //console.log(displayName,email,comment);
    return(
        <div >
             <div className='d-flex p-2 justify-content-between'>
                  <div><img src={photoURL? photoURL : profile }  style={{height:'25px',width:'25px',borderRadius:"100%"}} alt="" /></div>
                  <div><p> <small style={{fontSize:"10px"}}>  {displayName? displayName : email } </small></p></div>
             </div>
             <img src={selected} alt="" className="img-fluid mb-2" style={{height:'40%',width:'100%',maxHeight:'180px'}}/>
             <p>{comment}</p>
         </div>
    )
}
// const CommentShow = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

export default CommentShow;