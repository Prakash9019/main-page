import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import {BodyTemperature,PulseRate,BreathingRate,BloodPressure} from "./vitalsigndata";

const Vitalsigns = () => {
 
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };


  return (
    <>
    <nav>

        <div className="row">
            <Link className="vital-cat" onClick={() => handleClick('formOne')} to ="/vital_sign/vitalsigns/vt4"  >Blood pressure</Link>
            <Link className="vital-cat" onClick={() => handleClick('formTwo')} to='/vital_sign/vitalsigns/vt2'>Pulse Rate</Link>
            </div>
        <div className="row">
            <Link className="vital-cat" onClick={() => handleClick('formThree')} to='/vital_sign/vitalsigns/vt3' >Breathing rate</Link>
            <Link className="vital-cat" onClick={() => handleClick('formFour')} to='/vital_sign/vitalsigns/vt1'>Body Temperature</Link>
        </div>
        

    </nav>
    {currentForm === 'formOne' && <BodyTemperature />}
         {currentForm === 'formTwo' && <PulseRate />}
         {currentForm === 'formThree' && <BreathingRate />}
         {currentForm === 'formFour' && <BloodPressure />}
    </>

  )
}

export default Vitalsigns