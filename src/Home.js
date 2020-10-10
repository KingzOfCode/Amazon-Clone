import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className= 'home'>
            {/* ----------<p>I am the Home component</p>---------- Checking page*/}
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_jpg"
                    alt=""
                />
                <div className = "home__row">
                    <Product
                        id= '12345678' 
                        title= 'The Lean Startup' 
                        price= '19.99'
                        image= 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                        rating= {5}
                    />
                    <Product 
                        id= '87654321'
                        title= 'Echo Dot' 
                        price= '49.99'
                        image= 'https://cdn.arstechnica.net/wp-content/uploads/2018/11/Echo-Dot-Sandstone-Front-On-1440x1440.jpg' 
                        rating= {5}                    
                    />
                    <Product 
                        id= '32165487'
                        title= 'Samsung 23.5" FHD Curved Monitor'
                        price= '149.99'
                        image= 'https://m.media-amazon.com/images/I/91ubktnbNVL.jpg'
                        rating= {4}
                    />

                    <Product 
                        id= '78945612'
                        title= 'Apple MacBook Air'
                        price='1199.00'
                        image= 'data:image/jpeg;base64,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'
                        rating= {5}
                    />
                </div>

                <div className = "home__row">
                    <Product 
                        id= '45612378'
                        title= 'Blink Outdoor'
                        price= '99.99'
                        image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR6c1O8KErSFLMfwyswTVRoGl-2yOq7nkLa2A&usqp=CAU'
                        rating= {4}                    
                    />
                    <Product 
                        id= '45127896'
                        title= 'Unisex Adjustable Mask'
                        price= '7.99'
                        image= 'https://images-na.ssl-images-amazon.com/images/I/61%2BRKCM%2BPwL._AC_SL1024_.jpg'
                        rating= {3}                    
                    />
                </div>

                <div className = "home__row">
                    <Product 
                        id= '12457863'
                        title= 'Gallon Water Bottle'
                        price= '29.99'
                        image= 'https://images-na.ssl-images-amazon.com/images/I/61bF27tFIrL._AC_SL1200_.jpg'
                        rating= {2}                    
                    />
                    <Product 
                        id= '78451236'
                        title= 'Rivet Palm Tree LED'
                        price= '24.99'
                        image= 'https://images-na.ssl-images-amazon.com/images/I/71cMsm4Cj6L._AC_SL1500_.jpg'
                        rating= {4}                    
                    />
                    <Product 
                        id= '98562314'
                        title= '0 - 16 Bucket Hat'
                        price= '.99'
                        image= 'https://images-na.ssl-images-amazon.com/images/I/615E%2BGRAgfL._AC_SL1500_.jpg'
                        rating= {5}                    
                    />

                </div>
            </div>
        </div>
    )
}

export default Home
