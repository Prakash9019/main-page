import React from 'react'
import {Link} from 'react-router-dom';

const labtests = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };
  return (
    <nav>
   
    <div className="labtests">
        <div className="row">
        <Link className="labtest-list" to='/labtestcategories/bt1' onClick={() => handleClick('formOne')} >Blood Tests</Link>
        <Link className="labtest-list" onClick={() => handleClick('formOne')}  to='/labtestcategories/bt2'>Kidney tests</Link>
        </div>
        <div className="row">
        <Link className="labtest-list" onClick={() => handleClick('formOne')} to='/labtestcategories/bt3'>Thyroid function test</Link>
        <Link className="labtest-list" onClick={() => handleClick('formOne')} to='/labtestcategories/bt4'>Urinanalysis</Link>
        </div>
        {currentForm === 'formOne' && <BodyTemperature />}
         {currentForm === 'formTwo' && <PulseRate />}
         {currentForm === 'formThree' && <BreathingRate />}
         {currentForm === 'formFour' && <BloodPressure />}
    </div>
    
</nav>
  )
}

export default labtests