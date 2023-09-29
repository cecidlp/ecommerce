import React, { useState, useEffect } from 'react'
import './Home.css'
import { FiArrowRight } from 'react-icons/fi'
import Products from '../../Components/Products/products'



const Home = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className='promo-container'>
                <h1 className='promo-title'>February promo</h1>
                <p className='promo-text'>Up to 30% discount on selected products</p>
                <button className='promo-button'>Ver consolas</button>
            </div>
            <div className="products-container">
                <div className="product">
                    <div className="title-container">
                        <h2>Star Wars</h2>
                        <a href="" className='see-all'>See all <span><FiArrowRight /></span></a>
                    </div>

                    <Products category='Star Wars' windowWidth={windowWidth} />
                </div>
                <div className="product">
                    <div className="title-container">
                        <h2>Consoles</h2>
                        <a href="" className='see-all'>See all <span><FiArrowRight /></span></a>
                    </div>
                    <Products category='Consoles' windowWidth={windowWidth} />

                </div>
                <div className="product">
                    <div className="title-container">
                        <h2>Consoles</h2>
                        <a href="" className='see-all'>See all <span><FiArrowRight /></span></a>
                    </div>
                    <Products category='Others' windowWidth={windowWidth} />
                </div>

            </div>

        </div>
    )
}

export default Home