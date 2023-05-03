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
      <div className="labtests">
        <div className="row">
            <Link className="labtest-list" onClick={() => handleClick('formOne')} to ="/vital_sign/vitalsigns/vt4"  >Blood pressure</Link>
            <Link className="labtest-list" onClick={() => handleClick('formTwo')} to='/vital_sign/vitalsigns/vt2'>Pulse Rate</Link>
            </div>
        <div className="row">
            <Link className="labtest-list" onClick={() => handleClick('formThree')} to='/vital_sign/vitalsigns/vt3' >Breathing rate</Link>
            <Link className="labtest-list" onClick={() => handleClick('formFour')} to='/vital_sign/vitalsigns/vt1'>Body Temperature</Link>
        </div>
        </div>  
    {currentForm === 'formOne' && <BodyTemperature />}
         {currentForm === 'formTwo' && <PulseRate />}
         {currentForm === 'formThree' && <BreathingRate />}
         {currentForm === 'formFour' && <BloodPressure />}
    </>

  )
}

export default Vitalsigns