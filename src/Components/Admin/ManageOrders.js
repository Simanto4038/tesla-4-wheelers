import React,{ useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    const [displayOrder,setDisplayOrder]=useState("none")
    useEffect(() => {
        fetch('https://floating-coast-28469.herokuapp.com/userOrder')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    console.log(orders);
    return (
        <div className='m-5'>
                 <h2>
                     ALL ORDERS
                 </h2>
<div className="row g-4">
               {
                    orders.map(order =>{
                        const {jeepColor,name,FinalPrice,colorExtra,tireExtra,transmissionExtra,interiorExtra,entertainmentExtra,address}=order;
                       return(
                           
                        <div className='col-12 col-lg-4 col-md-6'>
                               <Card >
          <Card.Img variant="top" src={jeepColor} />
          <Card.Body>
            <Card.Title>{name} </Card.Title>
          
          </Card.Body>
          <ListGroup className="list-group-flush">
        <ListGroupItem>{FinalPrice} USD </ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR COLOR :- {colorExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR TIRE :-{tireExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR TRANSMISSION :-{transmissionExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR ITERIORCOLOR :-{interiorExtra} USD</ListGroupItem>
            <ListGroupItem> ADDITIONAL PRICE FOR ENTERTAINMENT :-{entertainmentExtra} USD</ListGroupItem>
            <ListGroupItem> ADDRESS :-{address} USD</ListGroupItem>
            <ListGroupItem> <button className='btn btn-warning m-3'>Delete</button>
                            <button className='btn btn-warning m-3'>Update</button></ListGroupItem>
          
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

export default ManageOrders;