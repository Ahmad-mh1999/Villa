import './InfoTable.css'
import icon1 from './../../assets/info-icon-01.png';
import icon2 from './../../assets/info-icon-02.png';
import icon3 from './../../assets/info-icon-03.png';
import icon4 from './../../assets/info-icon-04.png';
function InfoTable({area}) {
    return (
        <div className="Specifications">
            <ul className='info-table'>
                <li>
                    <img src={icon1} alt="space icon" />
                    <h4>
                        {area} m2
                        <br />
                        <span>Total Flat Space</span>
                    </h4>
                </li>
                <li>
                    <img src={icon2} alt="contarct icon" />
                    <h4>
                        Contract
                        <br />
                        <span>Contract Ready</span>
                    </h4>
                </li>
                <li>
                    <img src={icon3} alt="payment icon" />
                    <h4>
                        Payment
                        <br />
                        <span>Payment Process</span>
                    </h4>
                </li>
                <li>
                    <img src={icon4} alt="safety icon" />
                    <h4>
                        Safety
                        <br />
                        <span>24/7 Under Control</span>
                    </h4>
                </li>
            </ul>
        </div>
    )
}

export default InfoTable