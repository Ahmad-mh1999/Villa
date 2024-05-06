import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="flex-c">
      <h6> Copyright © 2048 Villa Agency Co., Ltd. All rights reserved.
        <br />
        Design: <Link to="https://www.linkedin.com/in/ahmed-mohammed-44a71a288">
          AhmedMh For WebDesign
        </Link>
      </h6>
    </div>
  )
}

export default Footer