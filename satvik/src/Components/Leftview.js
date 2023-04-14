<<<<<<< HEAD
import React from 'react'
import {Link} from 'react-router-dom';

const Leftview = () => {
  return (
    <div className="left-layout">
        <div className="left-section-link">
            <Link className="Demograph" to="/demographs.html">Profile</Link>
            <Link className="vital" to='/vital_sign/vitalsigns.html'>Vital Signs</Link>
            <Link className="lab-test" to="/labtests_and_reports/labtests.html">Lab tests</Link>
            <Link className="Medical" to="/labreports.html#crp">Medical Records</Link>
            <Link className="medications" to="/labreports.html#crp">Medicaions</Link>
        </div>
    </div>
  )
}

=======
import React from 'react'
import {Link} from 'react-router-dom';

const Leftview = () => {
  return (
    <div className="left-layout">
        <div className="left-section-link">
            <Link className="Demograph" to="/demographs.html">Profile</Link>
            <Link className="vital" to='/vital_sign/vitalsigns.html'>Vital Signs</Link>
            <Link className="lab-test" to="/labtests_and_reports/labtests.html">Lab tests</Link>
            <Link className="Medical" to="/labreports.html#crp">Medical Records</Link>
            <Link className="medications" to="/labreports.html#crp">Medicaions</Link>
        </div>
    </div>
  )
}

>>>>>>> 417171de5969de2928362333259b67b078d5f237
export default Leftview