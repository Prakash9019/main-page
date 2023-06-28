import React, { useState,useEffect } from 'react'
import '../App.css';
 import axios from "axios";
import { useNavigate } from 'react-router-dom';


const MedicalRecords = () => {
     const [item, setItem] = useState(null);
    // const [imt,setimt]=useState(null);
    const navigate=useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [images, setImages] = useState([]);

    const handleFileChange = (event) => {
           var reader=new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload=()=>{
           // console.log(reader.result);
            setItem(reader.result);
        }
        reader.onerror=error =>{
            console.log("Error" ,error);
        };
      setSelectedFile(event.target.files[0]);
    };
    
    useEffect(() => {
      const fetchImages = async () => {
        try {
          const response= await axios.get('http://localhost:5000/api/medical/images', {
            headers: {
              'Content-Type': 'multipart/form-data',
              "jwtData": localStorage.getItem('jwtData'),
            },
          });
          setImages(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchImages();
    }, []);
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();  
  try {
    // const {name,img}=item.img[0];
    // console.log("name"+name)
    const formData = new FormData();
    formData.append('myfile', selectedFile);

    await axios.post('http://localhost:5000/api/medical/upload-image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "jwtData": localStorage.getItem('jwtData'),
      },
    });
     console.log('Image uploaded successfully');
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
const _arrayBufferToBase64 = ( buffer ) => {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}


  return (
    <div className="img-u" id="vt2">
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
     <div >
      {images.map((image,i) =>{
          return <img src={`data:image/png;base64,${ _arrayBufferToBase64(image.img.data.data)}`} width={250} height={250} alt="" key={i} style={{'padding':'10px'}} />
      } )}
    </div>

    </div>
  )
};


export default MedicalRecords
