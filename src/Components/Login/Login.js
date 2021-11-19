import React, { useState } from 'react';
import googlelogo from './google.png'
import { Form , Button,Card, ListGroup, ListGroupItem, Navbar } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import initializeAuthentation from '../FirebaseConfigaretion/FirebaseInitialization';
import './logSign.css'

import useAuth from '../../hooks/useAuth';
import UseFirebase from '../../hooks/UseFirebase';


initializeAuthentation();



const Login = () => {
 


const {GoogleSignInHandler,
       user,
       error,
       setUser,
       setError,
       EmailSignInHandler,
       setEmail,
       setPassWord,
       resetPasword,
       setIsLoading} =UseFirebase()
console.log(user);

const history = useHistory()
const location = useLocation()

console.log(location.state?.from);
const redirect_URL = location.state?.from ||'/home'
console.log(redirect_URL.pathname);


const HandleGoogleLogIn = ()=>
{ 
  setIsLoading(true)
  GoogleSignInHandler().then((result) => {

    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }

    setUser(loggedinUserInfo);
    history.push(redirect_URL)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    setError(errorCode);
  }).finally(setIsLoading(false));
}


 
const handleEmailchange =(e)=>
{
  setEmail(e.target.value); 
}
const handlePasswordchange =(e)=>
{
  setPassWord(e.target.value); 
}

const HandleEmailLogIn =(e)=>
{
  e.preventDefault();

  EmailSignInHandler().then((result) => {

    const {displayName,email,photoURL} = result.user;
    const loggedinUserInfo={
      name:displayName,
      email:email,
      photo:photoURL
    }

    setUser(loggedinUserInfo);
    history.push(redirect_URL)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
   
    
    setError(errorCode);
    // ...
  });

}






    return (
        <div className="pt-5 row signInbody">
      
            <div className='col-12 col-lg-4 col-md-6  mx-auto  text-start p-4 signInBox '>
            <h2 className='text-white text-center'>Sign In / Log In</h2>

     <Form onSubmit={HandleEmailLogIn} className="border dorder-3 p-3 ">
           
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control onBlur={handleEmailchange} type="email" placeholder="Enter email" required />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control onBlur={handlePasswordchange} type="password" placeholder="Password" required />
    </Form.Group>
    <small className='text-danger'> {error} </small> <br />
  <Button variant="warning" style={{fontWeight: "bold", fontSize:'20px',color:"white",marginTop:'5px',paddingLeft:'25px',paddingRight:'25px'}} type="submit">
    
  Sign In
  </Button>
  <Button onClick={resetPasword} variant="link">Forgate Your Password??</Button>
  </Form>
   
 

   <br />
   {/* <p className='h5 text-white '>OR LOG IN WITH</p>
  <Button type="submit" onClick={HandleGoogleLogIn} className='btn btn-dark' >LOG IN WITH <img src={googlelogo} style={{height:'20px',width:'20px'}} alt="" /></Button> */}
 
    
  <br />
  
  <Navbar.Text className='h6 pe-3 '>
  <p className='h6 mt-3 text-white '>Don't have an account ??</p>
       <NavLink
     className='link text-white' style={{fontWeight: "bold",color:"blue"}} 
    activeStyle={{ fontWeight: "bold",color: "crimson"}} to="/signUp"> Sign Up <i className="fas fa-sign-in-alt"></i></NavLink >
      </Navbar.Text>
</div>


        </div>
    );
};

export default Login;