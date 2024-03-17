import { Link } from 'react-router-dom';
import './PropertyCard.css';
import property1 from './../../assets/property-01.jpg'
function PropertyCard({image, category , price , address, info}) {
    return (
        <div className='property-card'>
            <div className="card-image">
                <Link>
                    <img src={image} alt="Property Photo" />
                </Link>
            </div>
            <div className="card-content">
                <div className="header">
                    <div className="category">
                        <h5>{category}</h5>
                    </div>
                    <div className="price">
                        <h6>${price}</h6>
                    </div>
                </div>
                <div className="card-text">
                    <h4>
                        {address}
                    </h4>
                    <ul>
                        <li>Bedrooms: <span>{info.bedrooms}</span></li>
                        <li>Bathrooms: <span>{info.bathrooms}</span></li>
                        <li>Area: <span>{info.area}m2</span></li>
                        <li>Floor: <span>{info.floor}</span></li>
                        <li>Parking: <span>{info.parking}</span></li>
                    </ul>
                </div>
                <div className="card-button">
                    <Link to="/propertyDetails">
                        <button>Schedule a visit</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard

{/* <div className='property-card'>
            <div className="card-image">
                <Link>
                    <img src={property1} alt="Property Photo" />
                </Link>
            </div>
            <div className="card-content">
                <div className="header">
                    <div className="category">
                        <h5>Luxury Villa</h5>
                    </div>
                    <div className="price">
                        <h6>$2.264.000</h6>
                    </div>
                </div>
                <div className="card-text">
                    <h4>
                        18 New Street Miami, OR 97219
                    </h4>
                    <ul>
                        <li>Bedrooms: <span>8</span></li>
                        <li>Bathrooms: <span>8</span></li>
                        <li>Area: <span>545m2</span></li>
                        <li>Floor: <span>3</span></li>
                        <li>Parking: <span>6 spots</span></li>
                    </ul>
                </div>
                <div className="card-button">
                    <button>Schedule a visit</button>
                </div>
            </div>
        </div> */}