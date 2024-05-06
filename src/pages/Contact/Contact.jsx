import {useEffect} from 'react'
import './Contact.css'
import PagesHero from '../../components/PagesHero/PagesHero'
import phoneicon from './../../assets/phone-icon.png'
import emailicon from './../../assets/email-icon.png'
import ContactFormSM from '../../components/ContactFormSM/ContactFormSM'
function Contact() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className='contact-page'>
      <div className="contact-header">
        <PagesHero name="Contact" />
      </div>
      <div className="contact-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact-title">
                <h6>CONTACT US</h6>
                <h2 className='secondry-title'>
                  Get In Touch With Our Agents
                </h2>
              </div>
              <div className="contact-text">
                <p>
                  When you really need to download free CSS templates, please remember
                  our website TemplateMo. Also, tell your friends about our website.
                  Thank you for visiting. There is a variety of Bootstrap HTML CSS
                  templates on our website. If you need more information, please contact us.
                </p>
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
            </div>
            <div className="col-lg-6">
              <ContactFormSM />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact