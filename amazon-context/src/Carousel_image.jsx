import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import { Height } from '@mui/icons-material';

const Carousel_image = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="w-100"
          src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201801/Amazon_great_indian_sale_final.jpeg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className=""
         src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Holi23/MOB/H23_PC_HEADER_V4.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src='https://couponswala.com/blog/wp-content/uploads/2021/12/amazon-upcomming-sale-min-1.png'
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</>
  )
}

export default Carousel_image