
import React,{ useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const ManageTestdrive = () => {

    const [dates, setDates] = useState([]);
    useEffect(() => {
        fetch('https://floating-coast-28469.herokuapp.com/testdrive')
            .then(res => res.json())
            .then(data => setDates(data));
    }, []);
    return (
        <div>
            <div className="row g-4">
               {
                    dates.map( drivedate =>{
                        const {name,email,address,phone,branch,date, brand} =drivedate;
                       return(
                           
                        <div className='col-12 col-lg-4 col-md-6 p-4'>
                               <Card >
          <Card.Img variant="top" src={brand} style={{height:'250px'}} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
            <Card.Title>{email} </Card.Title>
            <Card.Title>{phone} </Card.Title>
          
          </Card.Body>
          <ListGroup className="list-group-flush">
        <ListGroupItem>ADDRESS : {address}</ListGroupItem>
            <ListGroupItem>PREFERED BRANCH: {branch}</ListGroupItem>
            <ListGroupItem> TEST DRIVE DATE :{date} </ListGroupItem>
            
            <ListGroupItem> <button className='btn btn-warning m-3'>Delete</button></ListGroupItem>
          
          </ListGroup>

         
        </Card>        
                       </div>
                       )
                        
                    })
               }
           </div>
        </div>
    );
};

export default ManageTestdrive;