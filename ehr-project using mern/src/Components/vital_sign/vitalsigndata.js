import React, { useState } from 'react'
import '../../../src/App.css';

const BodyTemperature = () => {
  const [note,setnote]=useState({btmeasure:"",datalist:"",temp:""});

  const handleClick=async (e)=>{
     e.preventDefault();
     const {btmeasure,datalist,temp} =note;
     const response = await fetch("http://localhost:5000/api/bodytemp/addbt", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          "jwtData": localStorage.getItem('jwtData')
      },
      body: JSON.stringify({btmeasure,datalist,temp})
  });
  const json = await response.json()
  console.log(json);
   //  addbt(note.btmeasure,note.datalist,note.temp);
 //    setnote({btmeasure:note.btmeasure,datalist:note.datalist,temp:note.temp})

  }

  const onChange=(e)=>{
    setnote({...note,[e.target.name]:[e.target.value]});
  }
  return (
    
    <div style={{margin: '234px 0'}} id="vt1">

      Body Temperature measured by:
      <input className="form-input" placeholder="measurement" type="text" name="btmeasure" onChange={onChange} value={note.btmeasure} list="btmeasure-list" />
      <datalist className="form-datalist" id="btmeasure-list" name="datalist" onChange={onChange} value={note.datalist}>
        <option  value="Orally" />
        <option  value="Rectally" />
        <option  value="Internally" />
        <option  value="By ear" />
        <option  value="By skin" />
      </datalist>
      <br />
      Body Temperature:
      <input className="form-input" type="text" placeholder="Enter body Temperature" name="temp" onChange={onChange} value={note.temp} /><br />
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

const PulseRate = () => {
  return (
    <div style={{margin: '234px 0'}} id="vt2">
      Pulse Rate:
      <input type="text" placeholder="Enter your pulse rate" className="form-input" /><br />
      <button onClick={() => console.log("Pulse Rate update clicked")}>Update</button>
      <br />
    </div>
  )
}

const BreathingRate = () => {
  return (
    <div style={{margin: '234px 0'}} id="vt3">
      Breathing Rate:
      <input type="text" placeholder="Enter your breath rate" className="form-input" name="breathing rate" /><br />
      <button onClick={() => console.log("Breathing Rate update clicked")}>Update</button>
      <br />
    </div>
  )
}

const BloodPressure = () => {
  return (
    <div style={{margin: '234px 0'}} id="vt4">
      Blood Pressure:
      <input type="text" placeholder="Select range" className="form-input" list="bp-list" />
      <datalist id="bp-list">
        <option  value="Normal-120/80" />
        <option  value="Elevated-(120-129)/80" />
        <option  value="Stage1-(130-139)/(80-89)" />
        <option  value="Stage2-(>140)/(>90)" />
      </datalist>
      <br />
      Breathing Rate:
      <input type="text" placeholder="Enter your bprate" className="form-input" name="bprate" /><br />
      <button onClick={() => console.log("Blood Pressure update clicked")}>Update</button>
    </div>
  )
}

// const VitalSignData = () => {
//   return (
  
        
//           <Routes>
//           <Route path="vital_sign/vitalsigns/vt1" element={ <BodyTemperature />} />
//           <Route path="vital_sign/vitalsigns/vt2" element={ <PulseRate />} />
//           <Route path="vital_sign/vitalsigns/vt3" element={ <BreathingRate />} />
//           </Routes>
    
//   )
// }

// export default VitalSignData
export {BodyTemperature,PulseRate,BreathingRate,BloodPressure}