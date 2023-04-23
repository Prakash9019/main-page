import React from 'react';
import {Link} from 'react-router-dom';

const Labtestcategories = () => {
  return (
    <nav>

    <div className="labtest-cat" id="bt1">
        <div className="row">
        <Link className="labtest-category" to='/labreports/crp'>C-Reactive Protien Test</Link>
        <Link className="labtest-category" to='/labreports/ana'>Anti Nuclear Antibody</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports/liver'>Liver function tests</Link>
        <Link className="labtest-category" to='/labreports/glucose'>glucose test<br/>/Diabetes</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports/cbc'>Complete Blood  Count</Link>
        <Link className="labtest-category" to='/labreports/blp'>Blood lipid profile</Link>
        </div>
    </div>
    <div className="labtest-cat" id="bt2">
            <div className="row">
            <Link className="labtest-category" to='/labreports/gfr'> Glomerular Filtration rate(GFR)</Link>
            <Link className="labtest-category" to='/labreports/cbu'>Cretinine blood and urine tests</Link>
            </div>
            <div className="row">
            <Link className="labtest-category" to='/labreports/albumin'>Albumin urine test</Link>
            </div>
    </div>
    <div className="labtest-cat" id="bt3">
        <div className="row">
        <Link className="labtest-category" to='/labreports/tsh'>TSH TEST</Link>
        <Link className="labtest-category" to='/labreports/t4'>T4 TESTS</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports/t3'>T3 TESTS</Link>    
        <Link className="labtest-category" to='/labreports/ft3'> FREE T3</Link>
        </div>   
    </div>
    <div className="labtest-cat" id="bt4">
        <div className="row">
        <Link className="labtest-category" to='/labreports/put'>Protein urine test</Link>
        <Link className="labtest-category" to='/labreports/phtest'>urine pH level test</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports/kut'>Ketones urine test</Link>
        <Link className="labtest-category" to='/labreports/uspecific'>Urine speific gravity test</Link>
        </div>
    </div>      
   </nav>
  )
}

export default Labtestcategories