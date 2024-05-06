import React from 'react'
import './Featured.css'
import featured from './../../assets/featured.jpg'
import Accordion from 'react-bootstrap/Accordion';
import icon1 from './../../assets/info-icon-01.png';
import icon2 from './../../assets/info-icon-02.png';
import icon3 from './../../assets/info-icon-03.png';
import icon4 from './../../assets/info-icon-04.png';
import featuredicon from './../../assets/featured-icon.png';
import InfoTable from '../InfoTable/InfoTable';
import AccordionQ from '../AccordionQ/AccordionQ';
function Featured() {
    return (
        <div className='featured'>
            <div className="container">
                <div className="featured-content">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 position-relative">
                            <img className='featured-img' src={featured} alt="Appartment Photo" />
                            <div className="icon">
                                <img src={featuredicon} alt="" />
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <h6>Featured</h6>
                            <h2 className='secondry-title'>
                                Best Appartment & Sea View
                            </h2>
                            <div className="accordion-container">
                                <AccordionQ />
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <InfoTable area="250" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured