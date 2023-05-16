import React from 'react'
import {Link} from 'react-router-dom';

const Leftview = () => {
  return (
    <div className="left-layout">
        <div className="left-section-link">
            <Link className="Demograph" to="/demographs">Profile</Link>
            <Link className="vital" to='/vital_sign/vitalsigns'>Vital Signs</Link>
            <Link className="lab-test" to="/labtests_and_reports/labtests">Lab tests</Link>
            <Link className="Medical" to="/medical_records">Medical Records</Link>
            <Link className="medications" to="/medical_records">Medicaions</Link>
        </div>
    </div>
  )
}

export default Leftview