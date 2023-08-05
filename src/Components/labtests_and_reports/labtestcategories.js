import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Crp,T4,T3,Kut,Tsh,Albumin,Cbu,Gfr,Liver,Glucose,Blp,Ana,Cbc,Phtest,Put,Us} from "./labreports"


const BloodTest = () => {
  
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };

  return (

    
    <form className="myform">
      <div id="bt1">
        <div className="row">
        <Link className="labtest-category"  onClick={() => handleClick('f1')} to='/labreports/crp'>C-Reactive Protien Test</Link>
        <Link className="labtest-category"  onClick={() => handleClick('f2')} to='/labreports/ana'>Anti Nuclear Antibody</Link>
        </div>
        <div className="row">
        <Link className="labtest-category"  onClick={() => handleClick('f3')} to='/labreports/liver'>Liver function tests</Link>
        <Link className="labtest-category"  onClick={() => handleClick('f4')} to='/labreports/glucose'>glucose test<br/>/Diabetes</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" onClick={() => handleClick('f5')} to='/labreports/cbc'>Complete Blood  Count</Link>
        <Link className="labtest-category" onClick={() => handleClick('f6')} to='/labreports/blp'>Blood lipid profile</Link>
        </div>
        <div className='row'>
        {currentForm === 'f1' && <Crp />}
         {currentForm === 'f2' && <Ana />}
         {currentForm === 'f3' && <Liver />}
         {currentForm === 'f4' && <Glucose />}
         {currentForm === 'f5' && <Cbc />}
         {currentForm === 'f6' && <Blp />}

         </div>
      </div>
    </form>
   
  )
}
const KindeyTest = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };

  return (
    <div  id="bt2">
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f7')} to='/labreports/gfr'> Glomerular Filtration rate(GFR)</Link>
    <Link className="labtest-category" onClick={() => handleClick('f8')} to='/labreports/cbu'>Cretinine blood and urine tests</Link>
    </div>
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f9')} to='/labreports/albumin'>Albumin urine test</Link>
    </div>
    {currentForm === 'f7' && <Gfr />}
    {currentForm === 'f8' && <Cbu />}
    {currentForm === 'f9' && <Albumin />}
</div>
  )
}


const ThyroidTest = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };

  return (

    <div  id="bt3">
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f10')} to='/labreports/tsh'>TSH TEST</Link>
    <Link className="labtest-category" onClick={() => handleClick('f11')} to='/labreports/t4'>T4 TESTS</Link>
    </div>
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f12')} to='/labreports/t3'>T3 TESTS</Link>    
    <Link className="labtest-category" onClick={() => handleClick('f13')} to='/labreports/ft3'> FREE T3</Link>
    </div>   
    {currentForm === 'f10' && <Tsh />}
    {currentForm === 'f11' && <T4 />}
    {currentForm === 'f12' && <T3 />}
</div>
  )
}


const Urinanalysis = () => {
  const [currentForm, setCurrentForm] = useState(null);

  const handleClick = (form) => {
    setCurrentForm(form);
  };


  return (
    <div  id="bt4">
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f14')} to='/labreports/put'>Protein urine test</Link>
    <Link className="labtest-category" onClick={() => handleClick('f15')} to='/labreports/phtest'>urine pH level test</Link>
    </div>
    <div className="row">
    <Link className="labtest-category" onClick={() => handleClick('f16')} to='/labreports/kut'>Ketones urine test</Link>
    <Link className="labtest-category" onClick={() => handleClick('f17')} to='/labreports/uspecific'>Urine speific gravity test</Link>
    </div>
    {currentForm === 'f14' && <Put />}
    {currentForm === 'f15' && <Phtest />}
    {currentForm === 'f16' && <Kut />}
    {currentForm === 'f17' && <Us />}
</div>      
  )
}




// const Labtestcategories = () => {
//   return (
//     <nav>

//     <div className="labtest-cat" id="bt1">
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/crp'>C-Reactive Protien Test</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/ana'>Anti Nuclear Antibody</Link>
//         </div>
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/liver'>Liver function tests</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/glucose'>glucose test<br/>/Diabetes</Link>
//         </div>
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/cbc'>Complete Blood  Count</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/blp'>Blood lipid profile</Link>
//         </div>
//     </div>
//     <div className="labtest-cat" id="bt2">
//             <div className="row">
//             <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/gfr'> Glomerular Filtration rate(GFR)</Link>
//             <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/cbu'>Cretinine blood and urine tests</Link>
//             </div>
//             <div className="row">
//             <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/albumin'>Albumin urine test</Link>
//             </div>
//     </div>
//     <div className="labtest-cat" id="bt3">
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/tsh'>TSH TEST</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/t4'>T4 TESTS</Link>
//         </div>
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/t3'>T3 TESTS</Link>    
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/ft3'> FREE T3</Link>
//         </div>   
//     </div>
//     <div className="labtest-cat" id="bt4">
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/put'>Protein urine test</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/phtest'>urine pH level test</Link>
//         </div>
//         <div className="row">
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/kut'>Ketones urine test</Link>
//         <Link className="labtest-category" onClick={() => handleClick('f1')} to='/labreports/uspecific'>Urine speific gravity test</Link>
//         </div>
//     </div>      
//    </nav>
//   )
// }

export {BloodTest,KindeyTest,ThyroidTest,Urinanalysis};