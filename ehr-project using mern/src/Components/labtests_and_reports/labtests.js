import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { BloodTest,KindeyTest,ThyroidTest,Urinanalysis } from "./labtestcategories";

const Labtests = () => {

  const [cf, sc] = useState(null);

  const handleClick = (form) => {
    sc(form);
  };

  
  return (
    <nav>
   
    <div className="labtests">
        <div className="row">
        <Link className="labtest-list" to='/labtestcategories/bt1' onClick={() => handleClick('formOne')} >Blood Tests</Link>
        <Link className="labtest-list" onClick={() => handleClick('formTwo')}  to='/labtestcategories/bt2'>Kidney tests</Link>
        </div>
        <div className="row">
        <Link className="labtest-list" onClick={() => handleClick('formThree')} to='/labtestcategories/bt3'>Thyroid function test</Link>
        <Link className="labtest-list" onClick={() => handleClick('formFour')} to='/labtestcategories/bt4'>Urinanalysis</Link>
        </div>
        {cf === 'formOne' && <BloodTest />}
         {cf === 'formTwo' && <KindeyTest />}
         {cf === 'formThree' && <ThyroidTest />}
         {cf === 'formFour' && <Urinanalysis />}
    </div>
    
</nav>
  )
}

export default Labtests