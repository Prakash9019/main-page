import './App.css';
import Demographs from "./Components/demographs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Leftview from "./Components/Leftview";
import Main from "./Components/main";
import Vitalsigns from "./Components/vital_sign/vitalsigns";
import Labtests from "./Components/labtests_and_reports/labtests";
import Login from "./Components/login"
import {BodyTemperature,PulseRate,BreathingRate,BloodPressure} from "./Components/vital_sign/vitalsigndata"
import {Crp,T4,T3,Kut,Tsh,Albumin,Cbu,Gfr,Liver,Glucose,Blp,Ana,Cbc,Phtest,Put,Us} from "./Components/labtests_and_reports/labreports";
import {BloodTest,KindeyTest,ThyroidTest,Urinanalysis} from "./Components/labtests_and_reports/labtestcategories"
import MedicalRecords from './Components/medical_records';
function App() {
  return (
   <Router>
    <Navbar/>
    <Leftview/>
    <Routes>
      <Route path="/main" element={<Main/>} />  
        <Route path="/" element={<Main/>} />
      <Route path="/demographs" element={<Demographs/>} />
      <Route path="/vital_sign/vitalsigns" element={<Vitalsigns/>} />
      <Route path="/vital_sign/vitalsigns/vt4" element={ <BloodPressure />} />
      <Route path="/vital_sign/vitalsigns/vt2" element={ <PulseRate />} />
      <Route path="/vital_sign/vitalsigns/vt3" element={ <BreathingRate />} />
      <Route path="/vital_sign/vitalsigns/vt1" element={ <BodyTemperature />} />
       <Route path='/labtests_and_reports/labtests' element={<Labtests/>} />
       <Route path='/labtestcategories/bt1' element={<BloodTest/>} />
       <Route path='/labtestcategories/bt2' element={<KindeyTest/>} />
       <Route path='/labtestcategories/bt3' element={<ThyroidTest/>} />
       <Route path='/labtestcategories/bt4' element={<Urinanalysis/>} />
       <Route path='/labreports/crp' element={<Crp/>} />
       <Route path='/labreports/t4' element={<T4/>} />
       <Route path='/labreports/t3' element={<T3/>} />
       <Route path='/labreports/kut' element={<Kut/>} />
       <Route path='/labreports/tsh' element={<Tsh/>} />
       <Route path='/labreports/albumin' element={<Albumin/>} />
       <Route path='/labreports/cbu' element={<Cbu/>} />
       <Route path='/labreports/gfr' element={<Gfr/>} />
       <Route path='/labreports/liver' element={<Liver/>} />
       <Route path='/labreports/glucose' element={<Glucose/>} />
       <Route path='/labreports/blp' element={<Blp/>} />
       <Route path='/labreports/ana' element={<Ana/>} />
       <Route path='/labreports/cbc' element={<Cbc/>} />
       <Route path='/labreports/phtest' element={<Phtest/>} />
       <Route path='/labreports/put' element={<Put/>} />
       <Route path='/labreports/uspecific' element={<Us/>} />
       <Route path='/medical_records' element={<MedicalRecords/>} />
       

       
       <Route path='/login' element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
