import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const ModelDetail = (props) => {
    const {name,banner1,bannerdes1,engineName,transmission101,transmissionName,fuelCity,towingCap,basePrice,_id}=props.jeep
    return (
        <div>
            <Card >
  <Card.Img variant="top" src={banner1} />
  <Card.Body>
    <Card.Title style={{fontWeight:'600'}}>{name}</Card.Title>
    <Card.Text style={{fontSize:'12px'}}>
     {bannerdes1}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className='d-flex justify-content-between align-items-center'>
        
        <div><img src="https://i.ibb.co/3rwMQ4F/engine101.jpg" alt="engine" style={{height:'65px'}} /></div>
        <div> <p style={{fontSize:'12px'}}>{engineName?engineName:'2.4L I4 Zero Evap MultiAir® Engine w/ Start / Stop'}</p></div>
    </ListGroupItem>
    <ListGroupItem className='d-flex justify-content-between align-items-center'>
        
        <div><img src={transmission101?transmission101:'https://i.ibb.co/Lz0zJR0/transmission.jpg'}alt="engine" style={{height:'65px'}} /></div>
        <div> <p style={{fontSize:'12px'}}>{transmissionName?transmissionName:'6-Spd Aisin F21-250 Gen 3 Auto Trans'}</p></div>
    </ListGroupItem>
    <ListGroupItem className='d-flex justify-content-between align-items-center'>
        
        <div><img src={'https://i.ibb.co/Nx6zLXW/fuel102.jpg'}alt="engine" style={{height:'45px'}} /></div>
        <div> <p style={{fontSize:'12px'}}>{fuelCity?fuelCity:'21L inside City'}</p></div>
    </ListGroupItem>
    <ListGroupItem className='d-flex justify-content-between align-items-center'>
        
        <div><img src={'https://i.ibb.co/cJ8Tr3j/tire.jpg'}alt="engine" style={{height:'55px'}} /></div>
        <div> <p style={{fontSize:'12px'}}>{towingCap?towingCap:'215/65R17 BSW All-Season On/Off Road Tires'}</p></div>
    </ListGroupItem>
    <ListGroupItem><h4>BASE PRICE:$ {basePrice?basePrice:'28500'}</h4></ListGroupItem>
   
  </ListGroup>
  <Card.Body>
  <NavLink className='link'  to={`/home/build/${_id}`}>
    <button className='btn btn-warning fw-bold'>BUILD & PRICE </button>
    </NavLink>
  </Card.Body>
</Card>
        </div>
    );
};

export default ModelDetail;