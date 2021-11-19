import React from 'react';
import { Card } from 'react-bootstrap';

const Features = (props) => {
    const {detailpic1,detailpic2,detailpic3,detailhdr1,detailhdr2,detailhdr3,detail3,detail2,detail1}=props.wheelers
    return (
     <div style={{paddingTop:'15px',boxShadow:'0px 0px 30px 20px black'}}>
            <div className='w-75 mx-auto row gx-4 gy-5'>
         <div className="col-lg-4 col-md-6 col-12 ">
             <img src={detailpic1} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2 text-white'>{detailhdr1}</h5>
             <p className='text-white'>{detail1}</p>
         </div>
         <div className="col-lg-4 col-md-6 col-12 ">
             <img src={detailpic2} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2 text-white'>{detailhdr2}</h5>
             <p className='text-white'>{detail2}</p>
         </div>
         <div className="col-lg-4 col-md-12 col-12 ">
             <img src={detailpic3} alt="" className="img-fluid" style={{height:'50%',width:'100%'}}/>
             <h5 className='fw-bold pt-2 text-white'>{detailhdr3}</h5>
             <p className='text-white'>{detail3}</p>
         </div>
        </div>
     </div>
    );
};

export default Features;