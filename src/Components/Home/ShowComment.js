import React, { useEffect, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import useComment from '../../hooks/useComment';
import CommentShow from './CommentShow';

const ShowComment = () => {
const [comments]= useComment();
//console.log(comments);
    return (
        <div className='container row g-4 mb-4 mt-4 mx-auto border border-1'>
            {
                comments.map(comment =>
                    {
                        return(
                            <div key={comment._id} className=" col-lg-2 col-4 border border-1 mb-2  ">
                            <CommentShow comment={comment} ></CommentShow>
                            </div>
                        )

                    })
            }
        </div>
    );
};



export default ShowComment;