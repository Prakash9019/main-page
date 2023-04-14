import './App.css';
import Demographs from "./Components/demographs"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Leftview from "./Components/Leftview";
import Main from "./Components/main";
import Vitalsigns from "./Components/vital_sign/vitalsigns";
import Labtests from "./Components/labtests_and_reports/labtests";

function App() {
  return (
   <Router>
    <Navbar/>
    <Leftview/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/demographs.html" element={<Demographs/>} />
      <Route path="vital_sign/vitalsigns.html" element={<Vitalsigns/>} />
       <Route path='labtests_and_reports/labtests.html' element={<Labtests/>} />
    </Routes>
   <Demographs/>
   </Router>
  );
}

export default App;
