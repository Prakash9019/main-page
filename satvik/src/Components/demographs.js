import React from 'react';
import {Link} from 'react-router-dom';
import imge from "./images/logo-main.png"

const Demographs = () => {
  return (
    <nav>
    <div className="top-layout">
        <div className="t-left">
            <img src={imge} alt="logo" />
            <div className="title">Electronic Health Record</div>
        </div>
        <div className="t-right">
            <div className="t-home" onclick="location.href='main.html';">Home</div>
            <div className="t-About">About Us</div>
        </div>
    </div>
    <div className="left-layout">
        <div className="left-section-link">
            <Link className="Demograph" to="/demographs.html">Profile</Link>
            <Link className="vital" to='/vital_sign/vitalsigns.html'>Vital Signs</Link>
            <Link className="lab-test" to="/labtests_and_reports/labtests.html">Lab tests</Link>
            <Link className="Medical" to="/labreports.html#crp">Medical Records</Link>
            <Link className="medications" to="/labreports.html#crp">Medicaions</Link>
        </div>
    </div>
        <div className="demo-display">
            <form className="myform">
            <label htmlFor="name">Name:</label><input className="form-input" placeholder="Your name" type="text" name="name"/><br/>
            <label htmlFor="age">Age:</label><input className="form-input"  type="text" placeholder="Enter your age"/>
            <br/>
            <label htmlFor="aadhar">Aadhaar Number:</label><input className="form-input" type="text" name="aadhar" placeholder="Enter your Adhaar Number"/>
            <br/>
            <label htmlFor="email">E-mail:</label><input className="form-input" type="text" name="email" placeholder="Enter your valid E-mail id" />
            <br/>
            <label htmlFor="gnd"> Gender:</label><input className="form-input" placeholder="Enter your Gender" type="text" id="gender" name="gnd" list="gender-option" />
            <datalist className="form-datalist" id="gender-option">
                <option value="male"/>
                <option value="female"/>
            </datalist>
            <br/>
            <label htmlFor="mart-st">Martial Status:</label><input className="form-input" placeholder="Martial-status" type="text" name="mart-st" list="martial-status-options"/>
             <datalist className="form-datalist" id="martial-status-options">
                <option value="notmarried"/>
                <option value="married"/>
            </datalist><br/>
            <label htmlFor="inc">Income:</label><input className="form-input" placeholder="Income" type="text" name="inc" list="income-options"/>
            <datalist id="income-options" className="form-datalist">
                <option value="Not working"/>
                <option value="below 2 lacks"/>
                <option value="2-7 lakhs"/>
                <option value="7-10 lakhs"/>
                <option value="Above 10 lakhs"/>
            </datalist>
            <br/>
            <label htmlFor="edc">Education:</label><input className="form-input" placeholder="Education details" type="text" name="edc" list="Education-options"/>
            <datalist id="Education-options" className="form-datalist">
                <option value="10th"/>
                <option value="Intermediate"/>
                <option value="Degree"/>
            </datalist><br/>
            <label htmlFor="emp">Employement:</label><input className="form-input" placeholder="Employement details" type="text" name="emp" list="Employement-options"/>
             <datalist id="Employement-options" className="form-datalist">
                <option value="public"/>
                <option value="Private sector"/>
                <option value="Unemployed"/>
            </datalist>
            <br/>
            <button type="submit">Update</button>
        </form>
        </div>
    </nav>

  );
}

export default Demographs;
