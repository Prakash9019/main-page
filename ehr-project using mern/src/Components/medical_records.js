import React, { useState } from 'react'
import '../App.css';


const MedicalRecords = () => {
    const [item,setItem]=useState('');

    const convertToBase64 =(e)=>{
        console.log(e);
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
            console.log(reader.result);
            setItem(reader.result);
        }
        reader.onerror=error =>{
            console.log("Error" ,error);
        };
    }
const upload=async ()=>{
    const response = await fetch("http://localhost:5000/api/medical/upload-image", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "jwtData": localStorage.getItem('jwtData')
        },
        body: JSON.stringify({ base64:Image})
    });
    const json = await response.json()
    console.log(json);
}

  return (
    <div className="vital-category-dt" id="vt2">
     Lets Upload image
     <br/>
     <br/>
   
   {Image==="" || Image===null ? "": <img width={100} height={100} src={item} alt='no  internet'/>}
     <br/>
     <br/>
        <input 
     type="file" 
     onChange={convertToBase64}
     />
     <br/>
     <button onClick={upload} >Upload</button>
    </div>
  )
}

export default MedicalRecords
