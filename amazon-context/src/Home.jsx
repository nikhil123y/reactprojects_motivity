
import React from 'react'
import Carousel_image from './Carousel_image'
import './Home.css'
import Product from './Product'


const Home = () => {
  return (
    <div>
        <div classNameName='home'>

            <div classNameName="home__conatiner">
                
                <div>
                <Carousel_image/>
                </div>
                 
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
                        price={1000.20}
                        rating={5}
                        image="https://cdn.shopify.com/s/files/1/0601/1093/0098/products/8907605002076_top_6.jpg?v=1673943480"
                    />
                    <Product
                        id="49538094"
                        title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
                        price={239.0}
                        rating={4}
                        image="https://www.lg.com/in/images/microwave-ovens/md07536273/gallery/MC2886BHT-Microwave-ovens-Right-Low-Perspective-view-D-12.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="All the Light we Cannot See: The Breathtaking World Wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://m.media-amazon.com/images/I/81M5hq90kNS._SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/61IfOpQwIEL._SX425_.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="data:image/jpeg;base64,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"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71CdS9Ck6NL._SL1500_.jpg"
                    />
                </div>
            </div>


            

            
        </div>
    </div>
  )
}

export default Home