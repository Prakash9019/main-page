import React from 'react'
import {Link} from 'react-router-dom';

const Main = () => {
  return (
    <nav>
        <div>
            <div className="slide-wrapper">
                <div className="slider">
                    <img id="slide-1" src="https://silverlinecrm.com/wp-content/uploads/2020/03/why-ehr-and-crm-are-better-together-e1592269029246.jpg" alt="image1"/>
                    <img id="slide-2" src="https://blueehr.com/wp-content/uploads/2017/02/Web-Based-EHR-1.jpg" alt='img2'/>
                    <img id="slide-3" src="https://www.techuz.com/blog/wp-content/uploads/2019/07/EHR-Banner.jpg" alt='img3'/>
                </div>
                <div className="slider-nav">
                <Link to="#slide-1"></Link>
                <Link to="#slide-2"></Link>
                <Link to="#slide-3"></Link>
                </div>
            </div>
        </div>
         
        <div className="para">
            <div className="image">
            <img src="https://img.freepik.com/premium-vector/illustration-cute-male-doctor-with-stethoscope-kawaii-vector-cartoon-character-design_380474-31.jpg" alt="image4" />
            </div>
            <div className="info">
            <p className="p1">"Medicines cure diseases,Doctors cure patients"<br/>
                                                            -Carl Jung
            </p>
            </div>
        </div>
        <div className="para1">
            <div className="info">
            <p>The major problem with carrying the health records is it can be lost anytime and in the time of need ,the
    tests need to be performed again.E- health record is like digital version of a patients paper chart. EHRs are
    real-time, patient-centered records that make information available instantly and securely to authorized users.
            </p>
            </div>
            <div className="image1">
                <img  src="https://education.ncgmedical.com/hubfs/how-to-keep-costs-down-in-an-ehr-implementation.jpeg" alt="image5" />    
            </div>
        </div>   
    </nav>
  )
}

export default Main;
