import './BestDeal.css'
import dealimg from './../../assets/deal-01.jpg'
import { FaCalendar } from "react-icons/fa";
import DealTable from '../DealTable/DealTable';
function BestDeal() {
    return (
        <div className='best-deal'>
            <div className="container">
                <div className="best-deal-header">
                    <div className="best-deal-text">
                        <h6>BEST DEAL</h6>
                        <h2 className='secondry-title'>
                            Find Your Best Deal Right Now!
                        </h2>
                    </div>
                    <ul className='fillter-deal'>
                        <li>
                            <button className='active-best'>Appartment</button>
                        </li>
                        <li>
                            <button>Villa House</button>
                        </li>
                        <li>
                            <button>Penthouse</button>
                        </li>
                    </ul>
                </div>
                <div className="best-deal-content">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <DealTable area="185" floor="26th" rooms="4" parking="Yes" payment="Bank" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src={dealimg} alt="Flat Photo" />
                        </div>
                        <div className="col-md-3 col-sm-12">
                        <h4>Extra Info About Property</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod
                                tempor pack incididunt ut labore et dolore magna aliqua quised ipsum
                                suspendisse.<br /><br />When you need free CSS templates,
                                you can simply type TemplateMo in any search engine website.
                                In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.
                            </p>
                            <div className="calendar calendar-margin">
                                <FaCalendar />
                            </div>
                            <button className='schedule-btn' > Schedule a visit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestDeal