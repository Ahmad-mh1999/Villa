
import './PropertyDetails.css'
import { useEffect } from 'react'
import PagesHero from '../../components/PagesHero/PagesHero'
import InfoTable from '../../components/InfoTable/InfoTable'
import singleProperty from './../../assets/single-property.jpg'
import AccordionQ from '../../components/AccordionQ/AccordionQ'
import BestDeal from '../../components/BestDeal/BestDeal'
import { Link } from 'react-router-dom'
function PropertyDetails() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className='details-page'>
      <div className="details-header">
        <PagesHero name="SINGLE PROPERTY" />
      </div>
      <div className="details-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details-img">
                <img src={singleProperty} alt="" />
              </div>
              <div className="main-content">
                <div className="category">
                  <span>Apparment</span>
                </div>
                <h4>
                  24 New Street Miami, OR 24560
                </h4>
                <p>Get
                  <strong>the best villa agency</strong>
                  HTML CSS Bootstrap Template for your company website. TemplateMo
                  provides you the <Link to="https://www.google.com/" >best free CSS templates</Link> in
                  the world. Please tell your friends about it. Thank you. Cloud
                  bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin
                  coffee schlitz enamel pin you probably haven't heard of them ugh hella.
                  <br /><br />
                  When you look for free CSS templates, you can simply type TemplateMo
                  in any search engine website. In addition, you can type TemplateMo
                  Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse
                  +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard
                  DSA poutine neutra cardigan hoodie pop-up.</p>
                <AccordionQ />
              </div>
            </div>
            <div className="col-lg-4">
              <InfoTable area="450" />
            </div>
          </div>
          <div className="deal">
            <BestDeal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails