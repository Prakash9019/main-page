import React, { useState } from 'react'
import '../App.css';
 import axios from "axios";


const MedicalRecords = () => {
    // const [item, setItem] = useState(null);
    // const [imt,setimt]=useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
    //  console.log(imt);
    //   console.log(item.img[0]);
    //  console.log(item.img[0].name);
    // //  console.log("mm"+item.img +item.img.name);
    //   // Create a new FormData object
    //   const myfile=item.img;
      // const formdata = new FormData();
      // formdata.append("myfile", item.img[0],item.img[0].name);
      // console.log(formdata);
  
  try {
    // const {name,img}=item.img[0];
    // console.log("name"+name);
    const formData = new FormData();
    formData.append('myfile', selectedFile);

    await axios.post('http://localhost:5000/api/medical/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "jwtData": localStorage.getItem('jwtData'),
      },
    });

 //   console.log('Image uploaded successfully');

      console.log("Done sucessfuly");
      // const json = await response.json()
      // console.log(json);
    } catch (error) {
      console.error(error);
    }
    }
    // const convertToBase64 =(e)=>{
    //     console.log(e);
    //     var reader=new FileReader();
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload=()=>{
    //         console.log(reader.result);
    //         setItem(reader.result);
    //     }
    //     reader.onerror=error =>{
    //         console.log("Error" ,error);
    //     };
    // }
// const upload=async ()=>{
//     try {
//     const response = await axios.post("/api/medical/upload-image", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data); // Image uploaded successfully
//     } catch (error) {
//       console.error(error);
//     }


// }

  return (
    <div className="vital-category-dt" id="vt2">
     Lets Upload image
     <br/>
     <br/>
   
  
     <br/>
     <br/>
     <form id="form" onSubmit={handleSubmit} >
        <input 
     type="file"  name='myfile'
     onChange={handleFileChange}
     />
     <br/>
     <button type='submit' >Upload</button>
     </form>
    </div>
  )
}

export default MedicalRecords
