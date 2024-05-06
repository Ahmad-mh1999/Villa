import React from 'react'
import './ContactSection.css'
import ContactFormSM from '../ContactFormSM/ContactFormSM'
import phoneicon from './../../assets/phone-icon.png'
import emailicon from './../../assets/email-icon.png'
function ContactSection() {
    return (
        <div className='contact-section'>
            <div className="contact-bg">
                <div className="contaioner">
                    <div className="title">
                        <h6>CONTACT US</h6>
                        <h2 className='secondry-title'>
                            Get In Touch With Our Agents
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" height="500px" frameborder="0" ></iframe>
                            </div>
                            <div className="icon-container">
                                <div className=" icon-contact">
                                    <img src={phoneicon} alt="phone icon" />
                                    <h4>
                                        010-020-0340
                                        <br />
                                        <span>Phone Number</span>
                                    </h4>
                                </div>
                                <div className=" icon-contact">
                                    <img src={emailicon} alt="email icon" />
                                    <h4>
                                        info@villa.com
                                        <br />
                                        <span>Business Email</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <ContactFormSM />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection