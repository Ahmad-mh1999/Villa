import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from './../../assets/banner-01.jpg'
import banner2 from './../../assets/banner-02.jpg'
import banner3 from './../../assets/banner-03.jpg'
import { GrFormPrevious } from "react-icons/gr";
// import banner1 from './../../src/assets/banner-01.jpg';
function Hero() {
    return (
        <div className='hero-page'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='carousel-text'>
                        <div className="hero-text">
                            <span className="category">
                                Toronto,
                                <em>Canada</em>
                            </span>
                            <h2>
                                Hurry!
                                <br />
                                Get the Best Villa for you
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='carousel-text'>
                        <div className="hero-text">
                            <span className="category">
                                Melbourne,
                                <em>Australia</em>
                            </span>
                            <h2>
                                Be Quick!
                                <br />
                                Get the best villa in town
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='carousel-text'>
                        <div className="hero-text">
                            <span className="category">
                                Miami,
                                <em>South Florida</em>
                            </span>
                            <h2>
                                Act Now!
                                <br />
                                Get the highest level penthouse
                            </h2>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero