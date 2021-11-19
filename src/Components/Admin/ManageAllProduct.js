import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCatagories from '../../hooks/useCatagories';

const ManageAllProduct = (props) => {
       
    const [wheelers] = useCatagories();
   
    return (
        <div>
           <div className='container mx-auto row g-4 mt-5'>
            {
                wheelers.map(jeep=> {
                    return (
                        <div key={jeep._id} className="col-lg-4 col-md-6 col-12 ">
                        <ShowProducts  jeep={jeep}/>
                    </div>
                    )
                })
            }
        </div>
        </div>
    );
};


const ShowProducts =(props)=>{
    const {name,banner1,bannerdes1,basePrice}=props.jeep
    return(
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
<ListGroupItem><h4>BASE PRICE:$ {basePrice?basePrice:'28500'}</h4></ListGroupItem>
<ListGroupItem> <button className='btn btn-warning m-3'>Delete</button>
                        <button className='btn btn-warning m-3'>Update</button></ListGroupItem>
</ListGroup>
<Card.Body>

</Card.Body>
</Card>
    </div>
    )
}
export default ManageAllProduct;