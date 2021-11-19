import React, { useState } from 'react'

import logo from './logo.png';
import './Header.css';
import './Navbar.css';
import { Container, Image, Nav, Navbar, Offcanvas,Card, ListGroup,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import profile from './profile.png'
import UseFirebase from '../../hooks/UseFirebase';
import Uppernav from './Uppernav';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const {user ,SignoutHandler} = UseFirebase()
  
 
    // products to be rendered on the UI
   // console.log(user);
    const {displayName,email,photoURL} = user;
   // console.log(user);
     



    function Userinfo() {
    
      return (
        <>
          <Offcanvas show={show} placement='end' onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>User Info</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
  
            <Card className='border border-0'>
              <div>
        
              <Card.Header>Featured </Card.Header>
              <div  className='p-2 text-center' >
                  <img src={photoURL? photoURL : profile }  style={{height:'55px',width:'55px',borderRadius:"100%"}} alt="" />
              </div>
              </div>
          
          <ListGroup variant="flush">
            <ListGroup.Item>Name: {displayName} </ListGroup.Item>
            <ListGroup.Item>Email:{email}</ListGroup.Item>
           
            <ListGroup.Item>
            <Card.Body>
           <Button onClick={SignoutHandler} className="btn btn-dark">Sign Out</Button>
           <Button className="btn btn-dark ms-2">Detail</Button>
            
          </Card.Body>
            </ListGroup.Item>
          </ListGroup>
        </Card>
            
            </Offcanvas.Body>
          </Offcanvas>
        </>
      );
    }
    
    return (
      <div>
        <Uppernav/>
    <Navbar collapseOnSelect expand="lg"  className="bg-dark "  variant="dark">
    <Container>
    <Navbar.Brand > <Image src={logo} style={{height:'80px',width:'135px'}} rounded /></Navbar.Brand>
    <Navbar.Toggle  className="bg-white border border-danger"  aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
  
      <Nav className=" w-75 mx-auto linkBox ">
      <NavLink 
       className='link' style={{ fontSize:'16px',color:"white"}} 
      activeStyle={{ fontSize:'20px'}} to="/home">HOME</NavLink >
      <NavLink 
       className='link' style={{ fontSize:'16px',color:"white"}} 
      activeStyle={{ fontSize:'20px'}}  to="/models">MODELS</NavLink >
      {/* <NavLink  className='link' style={{fontWeight: "bold", fontSize:'20px',color:"gray"}} 
      activeStyle={{ fontSize:'20px', fontWeight: "bold",color: "crimson"}} to="/shop">Shop</NavLink > */}
      <NavLink className='link' style={{fontSize:'16px',color:"white"}}
      activeStyle={{fontSize:'18px'}} to="/shopping">SHOPPING TOOLS</NavLink >
      <NavLink className='link' style={{fontSize:'16px',color:"white"}}
      activeStyle={{fontSize:'20px'}} to="/mydash"> My DashBoard </NavLink >
      <NavLink className='link' style={{fontSize:'16px',color:"white"}}
      activeStyle={{fontSize:'20px'}} to="/admin">Admin</NavLink >
      </Nav>
      
     <div className="d-block p-3">
     <i className="fas fa-map-marked-alt" style={{fontSize:'35px',color:'white'}}>  </i>
     <p className='text-white'>Find a Dealer</p>
     </div>
      <img  onClick={handleShow} src={photoURL? photoURL : profile }style={{height:'45px',width:'45px',borderRadius:"100%"}} alt="" />
      
     
       
     <Userinfo />
  
     
    </Navbar.Collapse>
    </Container>
  </Navbar>
      </div>
    );
    // return (
    //     <div className="header">
    //         <img className="logo" src={logo} alt="" />
    //         <nav>
    //             <NavLink to="/shop">Shop</NavLink>
    //             <NavLink to="/review">Order Review</NavLink>
    //             <NavLink to="/inventory">Manage Inventory</NavLink>
    //         </nav>
    //     </div>
    // );
};

export default Header;