import React from 'react';
import MenuSlider from '../Main/MenuSlider';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import LeaveComment from './LeaveComment';


const Home = () => {
    return (
        <div>
            <Banner1/>
            <MenuSlider/> 
            <Banner2/>
            <LeaveComment/>
            <Banner3/>
            
        </div>
    );
};

export default Home;