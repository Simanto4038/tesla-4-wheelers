import React,{ useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useBuild from '../../hooks/useBuild';
import { addToDb } from '../../utilities/fakedb';

import Summary from './Summary';


const Exterior = (props) => {

    const {available1,available2,available3,basePrice,towingCap,transmission101,transmissionName,name}=props.wheelers
    
    const {myJeep,setMyJeep}=useBuild()
    
    const [showSummary,setShowSummary]=useState("none")
    const [jeepColor,setJeepColor] = useState(available1)
    const [colorExtra,setColorExtra] = useState(0)
    const [tireExtra,setTireExtra] = useState(0)
    const [tire,setTire] = useState('https://i.ibb.co/Zd18nGp/detail104.jpg')
    const [transmission,setTransmission] = useState('https://i.ibb.co/Lz0zJR0/transmission.jpg')
    const [transmissionExtra,setTransmissionExtra] = useState(0)
     

    const [interiorColor,setinteriorColor] = useState('https://i.ibb.co/p2BsjHC/interior.jpg')
    const [interiorExtra,setinteriorExtra] = useState(0)

    const [entertainment,setentertainment] = useState('https://i.ibb.co/QjdCLSp/entainment.jpg')
    const [entertainmentExtra,setentertainmentExtra] = useState(0)
    const colorHandle1=()=>
    {
       
            setJeepColor(available1)
            
            setColorExtra(0)
          
    }
    const colorHandle2=()=>
    {
      
            setJeepColor(available2)
            setColorExtra(150)
       
    }
    const colorHandle3=()=>
    {
     
            setJeepColor(available3)
            setColorExtra(150)
    
    }
    const tireHandle1=()=>
    {
     
        setTireExtra(0)
        setTire('https://i.ibb.co/Zd18nGp/detail104.jpg')
    
    }
    const tireHandle2=()=>
    {
     
        setTireExtra(100)
        setTire('https://i.ibb.co/cJ8Tr3j/tire.jpg')
    }
    const transmissionHandle1=()=>
    {
     
        setTransmissionExtra(0)
        setTransmission('https://i.ibb.co/Lz0zJR0/transmission.jpg')
    }
    const transmissionHandle2=()=>
    {
     
        setTransmissionExtra(100)
        setTransmission('https://i.ibb.co/ssspXJ4/transmission.jpg')
    }
    

    const interiorColorHandle2=()=>
    {
     
        setinteriorExtra(100)
        setinteriorColor('https://i.ibb.co/prVBMLw/imgonline-com-ua-Color-filter-xh-Nn6kwv-RVx-A.jpg')
    }

    const interiorColorHandle1=()=>
    {
     
        setinteriorExtra(0)
        setinteriorColor('https://i.ibb.co/p2BsjHC/interior.jpg')
    }
    const entertainmentHandle1=()=>
    {
     
        setentertainmentExtra(0)
        setentertainment('https://i.ibb.co/QjdCLSp/entainment.jpg')
    }
    const entertainmentHandle2=()=>
    {
     
        setentertainmentExtra(100)
        setentertainment('https://i.ibb.co/vcG96M0/entertainment102.jpg')
    }


    const subTotal =()=>
    {
        const BasePrice = parseInt('28500');
        const Total = BasePrice+colorExtra+tireExtra+transmissionExtra+interiorExtra+entertainmentExtra;
        return(Total)
    }

    const FinalPrice = subTotal();
    const thisJeep = {jeepColor,name,FinalPrice,colorExtra,tireExtra,transmissionExtra,interiorExtra,entertainmentExtra,available1}
    const HandleBiuld =()=>
    {
        setMyJeep(thisJeep)

        addToDb(jeepColor,"jeepColor")
        addToDb(name,"name")
        addToDb(FinalPrice,"FinalPrice")
        addToDb(colorExtra,"colorExtra")
        addToDb(tireExtra,"tireExtra")
        addToDb(transmissionExtra,"transmissionExtra")
        addToDb(interiorExtra,"interiorExtra")
        addToDb(entertainmentExtra,"entertainmentExtra")
        addToDb(available1,"available1")

        // setShowSummary("block")
    }
    console.log(myJeep);
    
    return (
        <div>
        <div className="row g-0">
          <div className="col-lg-6 col-12">
              <img src={jeepColor?jeepColor:available1}className="img-fluid" alt=''/>
          </div>
  

         <div className="col-lg-6 col-12" style={{background: "rgba(14, 13, 13, 0.95)"}}>
         <Card style={{borderRadius:'0'}} >
         <ListGroup variant="flush">
           <ListGroup.Item><h4>BASE PRICE:$ {basePrice?basePrice:'28500'}</h4></ListGroup.Item>
           <ListGroup.Item><h4>CUSTOMED PRICE:${subTotal()} </h4></ListGroup.Item>
           <ListGroup.Item>
               <div>
                   <h4>Select The Color</h4>
                   <div><img src={jeepColor?jeepColor:available1}alt="engine" style={{height:'85px'}} /></div>
                   <button onClick={colorHandle1} className='btn btn-danger m-2'> Basic  </button> 
                   <button onClick={colorHandle2} className='btn btn-danger  m-2'>Custom 1</button> 
                   <button onClick={colorHandle3} className='btn btn-danger  m-2'>Custom 2</button>
               </div>
           </ListGroup.Item>
           <ListGroup.Item>
               <div>
                   <h4>Select Tire Style</h4>
                   <div className='d-flex justify-content-between align-items-center'>
        
                    <div><img src={tire?tire:'https://i.ibb.co/Zd18nGp/detail104.jpg'}alt="engine" style={{height:'55px'}} /></div>
                    <div> <p style={{fontSize:'12px'}}>{towingCap?towingCap:'215/65R17 BSW All-Season On/Off Road Tires'}</p></div>
                   </div>
                   <button onClick={tireHandle1} className='btn btn-danger m-2'> Basic  </button> 
                   <button onClick={tireHandle2} className='btn btn-danger  m-2'>Custom 1</button> 
               </div>
           </ListGroup.Item>
           <ListGroup.Item>
           <div>
                   <h4>Select Tire Style</h4>
                   <div className='d-flex justify-content-between align-items-center'>
        
                   <div><img src={transmission?transmission:'https://i.ibb.co/Lz0zJR0/transmission.jpg'}alt="engine" style={{height:'65px'}} /></div>
        <div> <p style={{fontSize:'12px'}}>{transmissionName?transmissionName:'6-Spd Aisin F21-250 Gen 3 Auto Trans'}</p></div>
                   </div>
                   <button onClick={transmissionHandle1} className='btn btn-danger m-2'> Basic  </button> 
                   <button onClick={transmissionHandle2} className='btn btn-danger  m-2'>Custom 1</button> 
               </div>
           </ListGroup.Item>
          
         </ListGroup>
          </Card>
         </div>
          
          </div>
      
        <div className="row g-0" style={{background: "rgba(14, 13, 13, 0.95)"}}>
         
        <div className="col-lg-6 col-12 mt-3" >
            
                  <ul>
                      <li>
                      <h4 className='text-white'>Select The Interior Color</h4>
                   <div><img src={interiorColor?interiorColor:"https://i.ibb.co/p2BsjHC/interior.jpg"}alt="engine" style={{height:'125px',width:'175px'}} /></div>
                  
                   <button onClick={interiorColorHandle1} className='btn btn-danger m-2'> Basic  </button> 
                   <button onClick={interiorColorHandle2} className='btn btn-danger m-2'> Custom 1</button> 
                      </li>
                      <li>
                      <h4 className='text-white'>Select The Entertainment</h4>
                   <div><img src={entertainment?entertainment:"https://i.ibb.co/QjdCLSp/entainment.jpg"}alt="engine" style={{height:'125px',width:'175px'}} /></div>
                   <button onClick={entertainmentHandle1} className='btn btn-danger m-2'> Basic  </button> 
                   <button onClick={entertainmentHandle2} className='btn btn-danger m-2'> Custom 1</button> 
                      </li>
                  </ul>
         
         </div>
         <div className="col-lg-6 col-12">
              <img src={interiorColor?interiorColor:'https://i.ibb.co/p2BsjHC/interior.jpg'}className="img-fluid" alt=''/>
          </div>
      
         </div>
         <NavLink className='link' to="/Summary">SHOPPING TOOLS

         <button onClick={HandleBiuld} className="btn btn-danger w-100 p-4" ><h3>GET THE SUMMARY</h3> </button>
         </NavLink >


         {/* <div style={{display:`${showSummary}`}}>
         <Summary  myJeep={myJeep}/>
         </div> */}
   
        </div>
    );
};

export default Exterior;