import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
import "swiper/modules/navigation/navigation.min.css"
import "swiper/modules/effect-cube/effect-cube.min.css"
import "swiper/modules/effect-coverflow/effect-coverflow.min.css"
import "swiper/modules/pagination/pagination.min.css"
import './style.css'
// import Swiper core and required modules
import SwiperCore, {EffectCoverflow,
    EffectCube,Pagination
  } from 'swiper';
import { useParams } from 'react-router';
import Gallary from './Gallary';
import Features from './Features';
  
  // install Swiper modules
  SwiperCore.use([EffectCube,EffectCoverflow,Pagination]);

const Detail = () => {
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
    console.log(wheelers);
   
    
    return (
        <div className='detail'>
             <Banner1  wheelers={wheelers}/>
             <Gallary wheelers={wheelers} />
             <Banner2  wheelers={wheelers}/>
             <Cube3dColor wheelers={wheelers} />
             <Features wheelers={wheelers}/>
             <Banner3  wheelers={wheelers}/>
             

        </div>
    );
};
const Banner1 =(props)=>{
    const {banner1,banner1hdr,bannerdes1}=props.wheelers
    console.log(props);
    return(
        <>
        <div className="bg-image">
          <img src={banner1}className="w-100" alt=''/>
          <div className="mask row p-4"   > 

         <div className="col-lg-6 d-none d-lg-block h-50 pt-5" style={{background: "rgba(251, 251, 251, 0.75)"}}>
         <h2 className='fw-bolder text-danger '>{banner1hdr}</h2>
          <p >{bannerdes1}</p>
          <button className='btn btn-outline-dark btn-rounded p-3' style={{borderColor:'rgb(20, 35, 200)'}} > Get A Test Drive</button>
         </div>
          
          </div>
        </div>
        <div className="w-100 d-lg-none d-block h-50 pt-5" style={{background: "rgba(0,0,0)"}}>
         <h3 className='fw-bolder text-white'>{banner1hdr}</h3>
          <p className='text-white'>{bannerdes1}</p>
          <button className='btn btn-danger w-100 '>Get A Test Drive</button>
         </div>
  </>
    )
}
const Banner2 =(props)=>{
    const {banner2,banner2hdr,bannerdes2}=props.wheelers
    return(
        <>
        <div className="bg-image">
          <img src={banner2}className="w-100" alt=''/>
          <div className="mask row p-4"   > 

         <div className="col-lg-6 d-none d-lg-block h-50 ms-auto my-auto pt-5" style={{background: "rgba(14, 13, 13, 0.75)"}}>
         <h3 className='fw-bolder text-white'>{banner2hdr}</h3>
          <p className='text-white' >{bannerdes2}</p>
          <button className='btn btn-outline-warning btn-rounded' data-mdb-ripple-color="dark" > Get A Test Drive</button>
         </div>
          
          </div>
        </div>
        <div className="w-100 d-lg-none d-block h-50 pt-5" style={{background: "rgba(0,0,0)"}}>
         <h3 className='fw-bolder text-white'>{banner2hdr}</h3>
          <p className='text-white'>{bannerdes2}</p>
          <button className='btn btn-danger w-100 '>Get Interior Detail</button>
         </div>
  </>
    )
}
const Banner3 =(props)=>{
    const {banner3,banner3hdr,bannerdes3}=props.wheelers
    return(
        <>
        <div className="bg-image">
          <img src={banner3}className="w-100" alt=''/>
          <div className="mask row p-4"   > 

         <div className="col-lg-6 d-none d-lg-block h-50 mx-auto my-auto pt-5" style={{background: "rgba(37, 37, 37, 0.67)"}}>
         <h3 className='fw-bolder text-white'>{banner3hdr}</h3>
          <p className='text-white'>{bannerdes3}</p>
          <button className='btn btn-outline-warning btn-rounded' data-mdb-ripple-color="dark" > Get A Test Drive</button>
         </div>
          
          </div>
        </div>
        <div className="w-100 d-lg-none d-block h-50 pt-5" style={{background: "rgba(0,0,0)"}}>
         <h3 className='fw-bolder text-white'>{banner3hdr}</h3>
          <p className='text-white'>{bannerdes3}</p>
          <button className='btn btn-danger w-100 '>Get Interior Detail</button>
         </div>
  </>
    )
}
const Cube3dColor =(props)=>
{   

    const {available1,available2,available3,available4,name}=props.wheelers
    return(
        <div className='bg-white pb-3'>
      
        <h2  style={{display:'inline-block',padding:'10px' ,fontWeight:'700',border:'solid rgb(16, 150, 190) 3px',borderRadius:'15px',marginTop:'10px'}}>
           AVAILABLE IN 4 DIFFERENT COLORS
        </h2>
        
        
        <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
"shadow": true,
"slideShadows": true,
"shadowOffset": 25,
"shadowScale": 0.94
}} pagination={true} className="mySwiper pb-5">
<SwiperSlide>
<img src={available1} />
<h6>{name}</h6>
</SwiperSlide>
<SwiperSlide>
<img src={available2} />
<h6>{name}</h6>
</SwiperSlide>
<SwiperSlide>
<img src={available3} />
<h6>{name}</h6>
</SwiperSlide>
<SwiperSlide><img src={available4} /> <h6>{name}</h6> </SwiperSlide>

</Swiper>
</div>
    )
}


export default Detail;