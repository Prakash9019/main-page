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
import { BloodTest,KindeyTest,ThyroidTest,Urinanalysis } from "./Components/labtests_and_reports/labtestcategories";

function App() {
  return (
   <Router>
    <Navbar/>
    <Leftview/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/demographs" element={<Demographs/>} />
      <Route path="/vital_sign/vitalsigns" element={<Vitalsigns/>} />
      <Route path="/vital_sign/vitalsigns/vt4" element={ <BloodPressure />} />
      <Route path="/vital_sign/vitalsigns/vt2" element={ <PulseRate />} />
      <Route path="/vital_sign/vitalsigns/vt3" element={ <BreathingRate />} />
      <Route path="/vital_sign/vitalsigns/vt1" element={ <BodyTemperature />} />
       <Route path='/labtests_and_reports/labtests' element={<Labtests/>} />
       <Route path='/labtestcategories/bt1' element={<BloodTest/>} />
       
       <Route path='/login' element={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
