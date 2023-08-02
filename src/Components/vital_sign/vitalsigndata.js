import React, { useState,useEffect } from 'react'
import axios from 'axios';
import '../../../src/App.css';

const BodyTemperature = () => {
  const [note,setnote]=useState({btmeasure:"",datalist:"",temp:""});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response= await axios.get('http://localhost:5000/api/bodytemp/fetchall', {
          headers: {
            'Content-Type': 'application/json',
            "jwtData": localStorage.getItem('jwtData'),
          },
        });
        if(response.data.length===0 ){
             setnote({btmeasure:" ",datalist:"",temp:""});
        }
        else{
          setnote(response.data[0]);
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

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
    
    <div className="vital-category-dt" id="vt1">

      Body Temperature measured by:<br/>
      <input className="form-input" placeholder="measurement" type="text" name="btmeasure" onChange={onChange} value={ note.btmeasure} list="btmeasure-list" />
      <datalist className="form-datalist" id="btmeasure-list" name="datalist" onChange={onChange} value={note.datalist}>
        <option  value="Orally" />
        <option  value="Rectally" />
        <option  value="Internally" />
        <option  value="By ear" />
        <option  value="By skin" />
      </datalist>
      <br />
      Body Temperature:<br/>
      <input className="form-input" type="text" placeholder="Enter body Temperature" name="temp" onChange={onChange} value={note.temp} /><br />
      <button onClick={handleClick}>Update</button>
    </div>
  )
}

const PulseRate = () => {
  return (
    <div className="vital-category-dt" id="vt2">
      Pulse Rate:<br/>
      <input type="text" placeholder="Enter your pulse rate" className="form-input" /><br />
      <button onClick={() => console.log("Pulse Rate update clicked")}>Update</button>
      <br />
    </div>
  )
}

const BreathingRate = () => {
    const [curr,newcurr]=useState({br:""});
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response= await axios.get('http://localhost:5000/api/breaths/fetchall', {
            headers: {
              'Content-Type': 'application/json',
              "jwtData": localStorage.getItem('jwtData'),
            },
          });
          if(response.data.length===0 ){
               newcurr({br:""});
          }
          else{
            newcurr(response.data[0]);
          }
          
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchImages();
    }, []);
    const handleClick=async (e)=>{
        e.preventDefault();
        const {br}=curr;
        
        const response= await fetch("http://localhost:5000/api/breaths/addbs",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "jwtData":localStorage.getItem('jwtData')
          },
          body:JSON.stringify({br}),
        }
        )
        const json = await response.json()
        console.log(json);
    }
   const onChange=(e)=>{
    newcurr({...curr,[e.target.name]:[e.target.value]});
   }

  return (
    <div className="vital-category-dt" id="vt3">
      Breathing Rate:<br/>
      <input type="text" placeholder="Enter your breath rate" className="form-input" name="br" onChange={onChange} value={curr.br}  /><br />
      <button onClick={handleClick}>Update</button>
      <br />
    </div>
  )
}

const BloodPressure = () => {
  const [note,setnote]=useState({bplimit:"",bprate:""});

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response= await axios.get('http://localhost:5000/api/bloodpre/fetchall', {
          headers: {
            'Content-Type': 'application/json',
            "jwtData": localStorage.getItem('jwtData'),
          },
        });
        if(response.data.length===0 ){
             setnote({bplimit:" ",bprate:""});
        }
        else{
          setnote(response.data[0]);
        }
        
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, []);

  const handleClick=async (e)=>{
     e.preventDefault();
     const {bplimit,bprate} =note;
     const response = await fetch("http://localhost:5000/api/bloodpre/addbp", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          "jwtData": localStorage.getItem('jwtData')
      },
      body: JSON.stringify({bplimit,bprate})
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
    <div className="vital-category-dt" id="vt4">
      Blood Pressure:<br/>
      <input type="text" placeholder="Select range" className="form-input" list="bp-list" name='bplimit' onChange={onChange} value={note.bplimit} />
      <datalist id="bp-list">
        <option  value="Normal-120/80" />
        <option  value="Elevated-(120-129)/80" />
        <option  value="Stage1-(130-139)/(80-89)" />
        <option  value="Stage2-(>140)/(>90)" />
      </datalist>
      <br />
      Breathing Rate:<br/>
      <input type="text" placeholder="Enter your bprate" className="form-input" name="bprate" onChange={onChange} value={note.bprate} /><br />
      <button onClick={handleClick}>Update</button>
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