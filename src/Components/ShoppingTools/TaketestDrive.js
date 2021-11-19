
import React, { useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const TaketestDrive = () => {
          
    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const phoneRef = useRef()
    const brandRef = useRef()
    const branchRef = useRef()
    const date2Ref = useRef()
    const [modalShow, setModalShow] = useState(false);
 
    const handleUserInput=(e)=>
    {

          
        e.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        const branch = branchRef.current.value;
        const date = date2Ref.current.value;
        const brand = brandRef.current.value;

        const myTestDrive = {name,email,address,phone,branch,date, brand}


        const uri = 'https://floating-coast-28469.herokuapp.com/testdrive'
        // const uri = 'http://localhost:5000/testdrive'

        fetch(uri,{
           method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(myTestDrive)
        }).then(response => response.json()).then(result =>{
         console.log(result)
         if (result.insertedId) {
            setModalShow(true)
            console.log('Success');
         }
        })

            console.log(myTestDrive );
    }   


    return ( 
      <div  className='row' style={{backgroundImage:'url(https://i.ibb.co/6YryXKk/banner103.jpg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',}}>
            <div className='col-lg-6 col-12 p-5 m-4 mx-auto' style={{backgroundColor:'rgba(255, 255, 255, 0.65)'}} >
            <h2 className='text-center'>Fill Out The form And Take A Test Drive</h2>
            <Form  onSubmit={handleUserInput}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Your Name </Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
    <Form.Control ref={emailRef} type="text" placeholder="Email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Phone</Form.Label>
    <Form.Control ref={phoneRef} type="text" placeholder="slogan" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Address</Form.Label>
    <Form.Control  ref={addressRef} type="text" placeholder="icon" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Branch</Form.Label>
    <Form.Select ref={branchRef}aria-label="Floating label select example">
        <option value="Dhaka">DHAKA</option>
        <option value="Rangpur">RANGPUR</option>
        <option value="Khulna">KHULNA</option>
        <option value="Rajshahi">RAJSHAHI</option>
        
        
  </Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Brand Model</Form.Label>
    <Form.Select ref={brandRef} aria-label="Floating label select example">
        <option value="https://i.ibb.co/6YryXKk/banner103.jpg">WANGNER</option>
        <option value="https://i.ibb.co/RBhGccc/gallary101.jpg">CHEROKEE</option>
        <option value="https://i.ibb.co/nL6qJMq/gallary101.jpg">GRAND CHEROKEE</option>
        <option value="https://i.ibb.co/SwYj2QS/Gallary102.webp">GLADIATOR</option>
        <option value="https://i.ibb.co/YN0ZW7P/banner101.webp">RENEGADE</option>
        
  </Form.Select>
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> <h3>Wirte Down A date</h3>
    </Form.Label>
    <Form.Control ref={date2Ref} type="text" placeholder="Wirte Down A date" />
  </Form.Group>
 

 
  <Button className='w-100 btn-warning p-4' variant="primary" type="submit">
    <h2>Submit</h2>
  </Button>
</Form>

<MyVerticallyCenteredModal
show={modalShow}
onHide={() => setModalShow(false)}
/>
        </div>
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
          <h3 className='text-center'>You Test Drive Date Is Succcessfully Boocked</h3>
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

export default TaketestDrive;