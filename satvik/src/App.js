import './App.css';
import Demographs from "./Components/demographs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Leftview from "./Components/Leftview";
import Main from "./Components/main";
import Vitalsigns from "./Components/vital_sign/vitalsigns";
import Labtests from "./Components/labtests_and_reports/labtests";
import {BodyTemperature,PulseRate,BreathingRate,BloodPressure} from "./Components/vital_sign/vitalsigndata"

function App() {
  return (
   <Router>
    <Navbar/>
    <Leftview/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/demographs.html" element={<Demographs/>} />
      <Route path="vital_sign/vitalsigns.html" element={<Vitalsigns/>} />
      <Route path="vital_sign/vitalsigns.html/vt1" element={ <BodyTemperature />} />
      <Route path="vital_sign/vitalsigns.html/vt2" element={ <PulseRate />} />
      <Route path="vital_sign/vitalsigns.html/vt3" element={ <BreathingRate />} />
      <Route path="vital_sign/vitalsigns.html/vt4" element={ <BloodPressure />} />
       <Route path='labtests_and_reports/labtests.html' element={<Labtests/>} />
    </Routes>
   </Router>
  );
}

export default App;
