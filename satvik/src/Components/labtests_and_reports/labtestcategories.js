import React from 'react';
import {Link} from 'react-router-dom';

const Labtestcategories = () => {
  return (
    <nav>

    <div className="labtest-cat" id="bt1">
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#crp'>C-Reactive Protien Test</Link>
        <Link className="labtest-category" to='/labreports.html#ana'>Anti Nuclear Antibody</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#liver'>Liver function tests</Link>
        <Link className="labtest-category" to='/labreports.html#glucose'>glucose test<br/>/Diabetes</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#cbc'>Complete Blood  Count</Link>
        <Link className="labtest-category" to='/labreports.html#blp'>Blood lipid profile</Link>
        </div>
    </div>
    <div className="labtest-cat" id="bt2">
            <div className="row">
            <Link className="labtest-category" to='/labreports.html#gfr'> Glomerular Filtration rate(GFR)</Link>
            <Link className="labtest-category" to='/labreports.html#cbu'>Cretinine blood and urine tests</Link>
            </div>
            <div className="row">
            <Link className="labtest-category" to='/labreports.html#albumin'>Albumin urine test</Link>
            </div>
    </div>
    <div className="labtest-cat" id="bt3">
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#tsh'>TSH TEST</Link>
        <Link className="labtest-category" to='/labreports.html#t4'>T4 TESTS</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#t3'>T3 TESTS</Link>    
        <Link className="labtest-category" to='/labreports.html#ft3'> FREE T3</Link>
        </div>   
    </div>
    <div className="labtest-cat" id="bt4">
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#put'>Protein urine test</Link>
        <Link className="labtest-category" to='/labreports.html#phtest'>urine pH level test</Link>
        </div>
        <div className="row">
        <Link className="labtest-category" to='/labreports.html#kut'>Ketones urine test</Link>
        <Link className="labtest-category" to='/labreports.html#uspecific'>Urine speific gravity test</Link>
        </div>
    </div>      
   </nav>
  )
}

export default Labtestcategories