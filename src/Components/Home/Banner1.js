import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner1 = () => {
    return (
        <div>
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/7j3XM9W/Banner-Main.webp" 
      alt="Banner-Main"
    />
    <Carousel.Caption>
     <div style={{background: "rgba(251, 251, 251, 0.75)"}}>
     <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/Z8hgFzg/Banner104.webp" alt="Banner104"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/yktGL7g/Banner-Main102.webp" alt="Banner-Main102"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner1;