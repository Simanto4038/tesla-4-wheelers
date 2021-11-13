import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.css";
// import "swiper/modules/navigation/navigation.min.css"

import "swiper/modules/effect-coverflow/effect-coverflow.min.css"
import "swiper/modules/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {EffectCoverflow,Pagination
  } from 'swiper';

  const SwiperSlideCss ={backgroundPosition:'center',backgroundSize:'cover',width:'400px',height:'400px'} 

  // install Swiper modules
  SwiperCore.use([EffectCoverflow,Pagination]);

const Gallary = (props) => {
    const {gallary101,gallary102,galalry103,gallary104,gallary105,banner1,banner2,banner3}=props.wheelers
    return (
        <div className='p-5'>
        <h1 className='fw-bold'>GALLARY </h1>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
  "rotate": 50,
  "stretch": 10,
  "depth": 100,
  "modifier": 1,
  "slideShadows": true
}}
style={{width: '100%',paddingTop: '10px',marginBottom: '50px',marginLeft:'-40%',position:'relative'}} pagination={true} className="mySwiper pb-5">
<SwiperSlide style={SwiperSlideCss}>
<img src={gallary101} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>

<SwiperSlide style={SwiperSlideCss}>
<img src={gallary102}  style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>

<SwiperSlide  style={SwiperSlideCss}>
<img src={galalry103} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>

<SwiperSlide  style={SwiperSlideCss}>
    <img src={gallary104} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>

<SwiperSlide  style={SwiperSlideCss}>
    <img src={gallary105} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>

<SwiperSlide  style={SwiperSlideCss}>
    <img src={banner1} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>
<SwiperSlide  style={SwiperSlideCss}>
    <img src={banner2} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>
<SwiperSlide  style={SwiperSlideCss}>
    <img src={banner3} style={{display:'block',width:'100%',height:'100%'}} />
</SwiperSlide>


</Swiper>
     
        </div>
    );
};

export default Gallary;