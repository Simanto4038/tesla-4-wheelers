import React from 'react';
import { Card } from 'react-bootstrap';

const Features = (props) => {
    const {detailpic1,detailpic2,detailpic3,detailhdr1,detailhdr2,detailhdr3,detail3,detail2,detail1}=props.wheelers
    return (
        <div className='w-75 mx-auto row gx-4 gy-5'>
         <div className="col-lg-4 col-md-6 col-12 ">
             <img src={detailpic1} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2'>{detailhdr1}</h5>
             <p>{detail1}</p>
         </div>
         <div className="col-lg-4 col-md-6 col-12 ">
             <img src={detailpic2} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2'>{detailhdr2}</h5>
             <p>{detail2}</p>
         </div>
         <div className="col-lg-4 col-md-12 col-12 ">
             <img src={detailpic3} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2'>{detailhdr3}</h5>
             <p>{detail3}</p>
         </div>
        </div>
    );
};

export default Features;