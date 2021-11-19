import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const ProductUpLoad = () => {
    const [users,setUsers]= useState([])
    const nameRef = useRef()
    const sloganRef = useRef()
    const iconRef = useRef()
    const banner1Ref = useRef()
    const banner2Ref = useRef()
    const banner3Ref = useRef()
    const banner1hdrRef = useRef()
    const banner2hdrRef = useRef()
    const banner3hdrRef = useRef()
    const bannerdes1Ref = useRef()
    const bannerdes2Ref = useRef()
    const bannerdes3Ref = useRef()
    const available1Ref = useRef()
    const available2Ref = useRef()
    const available3Ref = useRef()
    const available4Ref = useRef()
    const detailhdr1Ref = useRef()
    const detailhdr2Ref = useRef()
    const detailhdr3Ref = useRef()
    const detailpic1Ref = useRef()
    const detailpic2Ref = useRef()
    const detailpic3Ref = useRef()
    const detail1Ref = useRef()
    const detail2Ref = useRef()
    const detail3Ref= useRef()
    const galalry103Ref= useRef()
    const gallary101Ref= useRef()
    const gallary102Ref= useRef()
    const gallary104Ref= useRef()
    const gallary105Ref= useRef()

    const engine101Ref= useRef()
    const engineNameRef = useRef()
    const engineDetailRef = useRef()

    const transmission101Ref= useRef()
    const transmissionNameRef = useRef()
    const transmissionDetailRef = useRef()
   
    const fuelCityRef= useRef()
    const fuelHignwayRef = useRef()
    const towingCapRef = useRef()

    const basePriceRef = useRef()
   






    const handleUserInput=(e)=>
    {

          
        e.preventDefault()
        const name = nameRef.current.value;
        const slogan = sloganRef.current.value;
        const icon = iconRef.current.value;

        const banner1 = banner1Ref.current.value;
        const banner2 = banner2Ref.current.value;
        const banner3 = banner3Ref.current.value;

        const banner1hdr = banner1hdrRef.current.value;
        const banner2hdr = banner2hdrRef.current.value;
        const banner3hdr = banner3hdrRef.current.value;

        const bannerdes1 = bannerdes1Ref.current.value;
        const bannerdes2 = bannerdes2Ref.current.value;
        const bannerdes3 = bannerdes3Ref.current.value;

        const available1 = available1Ref.current.value;
        const available2 = available2Ref.current.value;
        const available3 = available3Ref.current.value;
        const available4 = available4Ref.current.value;

        const detailhdr1 = detailhdr1Ref.current.value;
        const detailhdr2 = detailhdr2Ref.current.value;
        const detailhdr3 = detailhdr3Ref.current.value;

        const detailpic1 = detailpic1Ref.current.value;
        const detailpic2 = detailpic2Ref.current.value;
        const detailpic3 = detailpic3Ref.current.value;

        const detail1 = detail1Ref.current.value;
        const detail2 = detail2Ref.current.value;
        const detail3 = detail3Ref.current.value;

        const  galalry103 =  galalry103Ref.current.value;
        const  gallary101 =  gallary101Ref.current.value;
        const  gallary102 =  gallary102Ref.current.value;
        const  gallary104 =  gallary104Ref.current.value;
        const  gallary105 =  gallary105Ref.current.value;

        const  engine101 = engine101Ref.current.value;
        const  engineName = engineNameRef.current.value;
        const  engineDetail = engineDetailRef.current.value;

        const transmission101 = transmission101Ref.current.value;
        const  transmissionName = transmissionNameRef.current.value;
        const  transmissionDetail = transmissionDetailRef.current.value;


        const  fuelCity = fuelCityRef.current.value;
        const  fuelHignway = fuelHignwayRef.current.value;
        const  towingCap = towingCapRef.current.value;

        const  basePrice = basePriceRef.current.value;
       


     const productDetail = {name,slogan,icon,
                           banner1,banner2,banner3,
                           banner1hdr,banner2hdr,banner3hdr,
                           bannerdes1,bannerdes2,bannerdes3,
                           available1,available2,available3,available4,
                           detailhdr1,detailhdr2,detailhdr3,
                           detailpic1,detailpic2,detailpic3,
                           detail1,detail2,detail3,
                           galalry103,gallary102,gallary104,gallary105,gallary101,
                           engine101,engineName,engineDetail,
                           transmission101,transmissionName,transmissionDetail,
                           fuelCity,fuelHignway,towingCap,basePrice}

    console.log(productDetail);

    const Url = 'https://floating-coast-28469.herokuapp.com/allcatagogy';

    // fetch(Url,
    //        {
    //            method:'POST',
    //            headers:{
    //                'Content-Type': 'application/json'
    //            },
    //            body: JSON.stringify(productDetail) 
    //        })
    //        .then(response => response.json())
    //        .then(data => {
    //          if (data.insertedId) {
    //              alert('Successfully Saved the Product')
    //             //  e.target.reset();
    //          }
    //        })
    //        .catch(error => {
    //          console.error('Error:', error);
    //        });


    axios.post(Url,productDetail).then(res=> {
        console.log(res)
        if (res.data.insertedId) {
          alert('Successfully Saved the Product')
        //   e.target.reset();
      }
      })
      .catch(function (error) {
        console.log(error);
      });

    }





    return (
        <div className='w-50 mb-5 mx-auto'>
            <h2 className='text-center'>PRODUCT UPLOAD</h2>
            <Form  onSubmit={handleUserInput}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Product Name </Form.Label>
    <Form.Control ref={nameRef} type="text" placeholder="Product Name" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Slogan</Form.Label>
    <Form.Control ref={sloganRef} type="text" placeholder="slogan" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Icon</Form.Label>
    <Form.Control  ref={iconRef} type="text" placeholder="icon" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 1</Form.Label>
    <Form.Control ref={banner1Ref} type="text" placeholder="Banner1" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 2</Form.Label>
    <Form.Control ref={banner2Ref} type="text" placeholder="Banner2" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 3</Form.Label>
    <Form.Control ref={banner3Ref} type="text" placeholder="Banner3" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 1 Header</Form.Label>
    <Form.Control ref={banner1hdrRef} type="text" placeholder="Banner 1 Header" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 2 Header</Form.Label>
    <Form.Control ref={banner2hdrRef} type="text" placeholder="Banner 2 Header" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 3 Header</Form.Label>
    <Form.Control ref={banner3hdrRef} type="text" placeholder="Banner 3 Header" />
  </Form.Group>
 
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 1 Description </Form.Label>
    <Form.Control ref={bannerdes1Ref} type="text" placeholder="Banner 1 Description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 2 Description </Form.Label>
    <Form.Control ref={bannerdes2Ref}  type="text" placeholder="Banner 2 Description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Banner 3 Description </Form.Label>
    <Form.Control ref={bannerdes3Ref}  type="text" placeholder="Banner 3 Description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Available 1</Form.Label>
    <Form.Control ref={available1Ref} type="text" placeholder="Available 1" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Available 2</Form.Label>
    <Form.Control ref={available2Ref} type="text" placeholder="Available 2" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Available 3</Form.Label>
    <Form.Control ref={available3Ref} type="text" placeholder="Available 3" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Available 4</Form.Label>
    <Form.Control ref={available4Ref} type="text" placeholder="Available 4" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Header 1</Form.Label>
    <Form.Control ref={detailhdr1Ref}  type="text" placeholder="Detail Header 1" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Header 2</Form.Label>
    <Form.Control  ref={detailhdr2Ref} type="text" placeholder="Detail Header 2" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Header 3</Form.Label>
    <Form.Control  ref={detailhdr3Ref} type="text" placeholder="Detail Header 3" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Pic 1</Form.Label>
    <Form.Control ref={detailpic1Ref} type="text" placeholder="Detail Pic 1" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Pic 2</Form.Label>
    <Form.Control ref={detailpic2Ref}  type="text" placeholder="Detail Pic 2" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail Pic 3</Form.Label>
    <Form.Control ref={detailpic3Ref}  type="text" placeholder="Detail Pic 3" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail 1</Form.Label>
    <Form.Control ref={detail1Ref} type="text" placeholder="Detail 1" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail 2</Form.Label>
    <Form.Control ref={detail2Ref} type="text" placeholder="Detail 2" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Detail 3</Form.Label>
    <Form.Control ref={detail3Ref} type="text" placeholder="Detail 3" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Galalry 103</Form.Label>
    <Form.Control ref={galalry103Ref} type="text" placeholder="Galalry 103" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Gallary 101 </Form.Label>
    <Form.Control ref={gallary101Ref} type="text" placeholder="Gallary 101" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Gallary 102 </Form.Label>
    <Form.Control ref={gallary102Ref} type="text" placeholder="Gallary 102" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Gallary 104 </Form.Label>
    <Form.Control ref={gallary104Ref} type="text" placeholder="Gallary 104" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Gallary 105 </Form.Label>
    <Form.Control ref={gallary105Ref} type="text" placeholder="Gallary 105" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Engine 101 (pic) </Form.Label>
    <Form.Control ref={engine101Ref} type="text" placeholder="Gallary 105" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Engine Name </Form.Label>
    <Form.Control ref={engineNameRef} type="text" placeholder="Engine Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Engine Detail </Form.Label>
    <Form.Control ref={engineDetailRef} type="text" placeholder="Engine Detail " />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Transmission 101 (pic) </Form.Label>
    <Form.Control ref={transmission101Ref} type="text" placeholder="Transmission 101" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Transmission Name </Form.Label>
    <Form.Control ref={transmissionNameRef} type="text" placeholder="Transmission Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Transmission Detail </Form.Label>
    <Form.Control ref={transmissionDetailRef} type="text" placeholder="Transmission Detail " />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Fuel City </Form.Label>
    <Form.Control ref={fuelCityRef} type="text" placeholder="Fuel City" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Fuel Hignway </Form.Label>
    <Form.Control ref={fuelHignwayRef} type="text" placeholder="Fuel Hignway" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Tire Capacity </Form.Label>
    <Form.Control ref={towingCapRef} type="text" placeholder="Towing Capacity" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label> Base Price </Form.Label>
    <Form.Control ref={basePriceRef} type="text" placeholder="Base Price" />
  </Form.Group>
  <Button className='w-100' variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    );
};

export default ProductUpLoad;