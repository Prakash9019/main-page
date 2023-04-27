import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import imge from "./images/logo-main.png"

const Navbar = () => {
  let navigate=useNavigate();
  const handleLogout=()=>{
      localStorage.removeItem('jwtData');
      navigate('/');
  }
  return (
<div className="top-layout">
        <div className="t-left">
            <img src={imge} alt="logo" />
            <div className="title">Electronic Health Record</div>
        </div>
        <div className="t-right">
            <Link className="t-home" to='/main'>Home</Link>
            {!localStorage.getItem('jwtData')? <Link className="t-home" to='/login'>Login</Link> : <Link className="t-home" onClick={handleLogout} >Logout</Link>  }
            <Link className="t-home" to='/main'>About</Link>
        </div>
    </div>
  )
}

export default Navbar