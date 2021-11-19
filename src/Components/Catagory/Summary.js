import React,{ useRef,useState } from 'react';
import { Card, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';


import useAuth from '../../hooks/useAuth';
import useBuild from '../../hooks/useBuild';
import { getStoredCart } from '../../utilities/fakedb';

const Summary = (props) => {

    const addressRef = useRef()
    const [modalShow, setModalShow] = useState(false);
    const {user}=useAuth();
    // const {myJeep}=useBuild()
    // console.log(myJeep);
    const myJeep = getStoredCart()
    console.log(myJeep);
    const {jeepColor,name,FinalPrice,colorExtra,tireExtra,transmissionExtra,interiorExtra,entertainmentExtra,available1}= myJeep
    const HandleOrder=(e)=>
    {
           
        e.preventDefault()
        const address =  addressRef.current.value;
        const Username = user.displayname;
        const email = user.email;

        const orderDetail = {Username,email,address,jeepColor,name,FinalPrice,
                             colorExtra,tireExtra,transmissionExtra,
                             interiorExtra,entertainmentExtra,available1  }
       
                                          
       console.log(orderDetail);



       const uri = 'https://floating-coast-28469.herokuapp.com/userOrder'

           fetch(uri,{
              method:'POST',
               headers:{
                   'content-type':'application/json'
               },
               body: JSON.stringify(orderDetail)
           }).then(response => response.json()).then(result =>{
            console.log(result)
            if (result.insertedId) {
               setModalShow(true)
               
            }
           })
    }
   
 
    return (
        <div className="container mx-auto">
                   <Card >
  <Card.Img variant="top" src={jeepColor?jeepColor:available1} />
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
    <input ref={addressRef} type="text" placeholder="address"/>
  </ListGroup>
  <Card.Body>
 <button onClick={HandleOrder} className='btn btn-danger'> SUBMIT THE ORDER </button>
  </Card.Body>
</Card>
<MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/>
        </div>
    );
};


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3 className='text-center'>You Order Has Been Succcessfully Placed</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex align-items-center justify-content-center p-5 ">
        <i className="far fa-check-circle m-5" style={{color:'greenyellow',fontSize:'120px'}}></i>
        </div>
        </Modal.Body>
        
      </Modal>
    );
  }

export default Summary;