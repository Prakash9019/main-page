import React from 'react'
import {Link} from 'react-router-dom';

const Vitalsigns = () => {
  return (
    <nav>
       
        <div className="row">
            <Link className="vital-cat" to='/vitalsigndata.html#vt1'>Blood pressure</Link>
            <Link className="vital-cat" to='/vitalsigndata.html#vt2'>Pulse Rate</Link>
            </div>
        <div className="row">
            <Link className="vital-cat" to='/vitalsigndata.html#vt3'>Breathing rate</Link>
            <Link className="vital-cat" to='/vitalsigndata.html#vt4'>Body Temperature</Link>
        </div>
    </nav>
  )
}

export default Vitalsigns