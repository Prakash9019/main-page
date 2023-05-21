const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const { body, validationResult } = require('express-validator');
const Model=require('../Medical');
var fs=require('fs');
var path = require('path');

var app = express();

 var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true,parameterLimit:100000,limit:"50mb" }))
app.use(bodyParser.json())

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname)
    }
});
//, limits:{fileSize: maxSize} 
 const maxSize=40 *1024*1024;
var upload = multer({ storage: storage});
 
// const convertToBase64=(req.file)=>{
// //return(console.log("fine"));
// };
 
router.post('/upload-image', upload.single('myfile'), async (req, res) => {
  
    console.log(req.body);
//    let image = (req.file) ? req.file.filename :null;
  // console.log(image);
   console.log(req.file);
  const {originalname,mimetype,path}=req.file;

    const inl=new Model({
        name:originalname,
        image:{
            data:null,
            contentType:'image/png'
        }
    })
    const image = await inl.save();

    const buffer = fs.readFileSync(path); // Read the file from the file system

    image.img.data = buffer; // Assign the buffer to the img.data property

    const savedImage = await image.save();

    console.log('Image saved:');


//     console.log(req.body.imt);
//     console.log("....");
//     console.log(req.file.originalname);
//    let data=new Model();
//    data.name=req.file.originalname;
//    fs.writeFileSync(req.file.originalname,req.file.filename);
//    data.img.data=fs.readFileSync(path.join("D:/mini-pro/main-page/ehr-project using mern/" + req.file.originalname));
//    data.img.contentType='image/png';
//    const savedNote=await data.save();
//    console.log(savedNote);
//    res.json(savedNote);
   
    });


module.exports=router;

