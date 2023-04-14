import React from 'react'

const Labtestcategories = () => {
  return (
    <nav>
    <div className="top-layout">
        <div className="t-left">
            <img src="/images/logo-main.png" alt="logo"/>
            <div className="title">Electronic Health Record</div>
        </div>  
    </div>
    <div className="t-right">
            <div className="t-home" onclick="location.href='/main.html';">Home</div>
            <div className="t-About">About Us</div>
    </div>
    <div className="left-layout">
        <div className="left-section-link">
            <div className="Demograph" onclick="location.href='/demographs.html';">Profile</div>
            <div className="vital" onclick="location.href='/vital_sign/vitalsigns.html';">Vital Signs</div>
            <div className="lab-test" onclick="location.href='/labtests_and_reports/labtests.html';">Lab tests</div>
            <div className="Medical" onclick="location.href='labreports.html#crp';">Medical Records</div>
            <div className="medications" onclick="location.href='labreports.html#crp';">Medicaions</div>
        </div>
    </div>
    <div className="labtest-cat" id="bt1">
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#crp';">C-Reactive Protien Test</div>
        <div className="labtest-category" onclick="location.href='labreports.html#ana';">Anti Nuclear Antibody</div>
        </div>
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#liver';">Liver function tests</div>
        <div className="labtest-category" onclick="location.href='labreports.html#glucose';">glucose test<br/>/Diabetes</div>
        </div>
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#cbc';">Complete Blood  Count</div>
        <div className="labtest-category" onclick="location.href='labreports.html#blp';">Blood lipid profile</div>
        </div>
    </div>
    <div className="labtest-cat" id="bt2">
            <div className="row">
            <div className="labtest-category" onclick="location.href='labreports.html#gfr';"> Glomerular Filtration rate(GFR)</div>
            <div className="labtest-category" onclick="location.href='labreports.html#cbu';">Cretinine blood and urine tests</div>
            </div>
            <div className="row">
            <div className="labtest-category" onclick="location.href='labreports.html#albumin';">Albumin urine test</div>
            </div>
    </div>
    <div className="labtest-cat" id="bt3">
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#tsh';">TSH TEST</div>
        <div className="labtest-category" onclick="location.href='labreports.html#t4';">T4 TESTS</div>
        </div>
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#t3';">T3 TESTS</div>    
        <div className="labtest-category" onclick="location.href='labreports.html#ft3';"> FREE T3</div>
        </div>   
    </div>
    <div className="labtest-cat" id="bt4">
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#put';">Protein urine test</div>
        <div className="labtest-category" onclick="location.href='labreports.html#phtest';">urine pH level test</div>
        </div>
        <div className="row">
        <div className="labtest-category" onclick="location.href='labreports.html#kut';">Ketones urine test</div>
        <div className="labtest-category" onclick="location.href='labreports.html#uspecific';">Urine speific gravity test</div>
        </div>
    </div>      
   </nav>
  )
}

export default Labtestcategories