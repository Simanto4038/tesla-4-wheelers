import React from 'react';

const Banner3 = () => {
    return (
        <div className='row m-4'>
            <div className='col-12 col-lg-6'>
            <img src="https://i.ibb.co/ZTPcsQ0/Jeep-Wave.webp" className='img-fluid' alt="" />
            </div>
            <div className='col-12 col-lg-6 p-3 pe-4'>
            <h1 style={{fontWeight:'700'}}>WORRY-FREE MAINTENANCE FOR YOUR PEACE OF MIND</h1>
            <p>You will be automatically enrolled into the Jeep Wave® program 
                with the purchase or lease of any 2021 Jeep® Brand vehicle.
                This premium customer care program is valid for 36 months from date of ownership 
                and provides you with no additional cost worry-free maintenance and dedicated 24/7 support
                along with additional perks and benefits. 
                It is the Most Valuable Customer Care Program in America</p>
            </div>
        </div>
    );
};

export default Banner3;