import React from 'react'
import {Link} from 'react-router-dom';
import imge from "./images/logo-main.png"

const Navbar = () => {
  return (
<div className="top-layout">
        <div className="t-left">
            <img src={imge} alt="logo" />
            <div className="title">Electronic Health Record</div>
        </div>
        <div className="t-right">
            <Link className="t-home" to='/main.html'>Home</Link>
            <div className="t-About">About Us</div>
        </div>
    </div>
  )
}

export default Navbar