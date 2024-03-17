import React from 'react'
import './VedioSection.css'
import { Navigate  , Link} from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import vedioImg from './../../assets/video-frame.jpg';
function VedioSection() {
  return (
    <div className='vedio-section' >
        <div className="vedio-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4 ">
                        <div className="vedio-text text-center">
                            <h6>
                                Video View
                            </h6>
                            <h2>
                                Get Closer View & Different Feeling
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="vedio-play position-relative">
                        <img src={vedioImg} alt="vedio image" />
                        <Link to="https://www.youtube.com/" className=' position-absolute ' >
                            <FaPlay />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VedioSection