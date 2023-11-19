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
const { redirect } = require('react-router-dom');
const fetchUser = require('../fetch');
 
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
 

// API endpoint for fetching all images
router.get('/images',fetchuser, async (req, res) => {
    try {
      const images = await Model.find({user:req.user.id});
      res.json(images);
    } catch (error) {
      res.status(500).send('Failed to fetch images');
    }
  });
  

router.post('/upload-image', upload.single('myfile'), fetchuser,async (req, res) => {
  
  const {originalname,mimetype,path}=req.file;

    const inl=new Model({
      user:req.user.id,
        name:originalname,
        image:{
            data:null,
            contentType:'image/png'
        }
    })
    const image = await inl.save();
//djbvsbhb
    const buffer = fs.readFileSync(path); // Read the file from the file system

    image.img.data = buffer; // Assign the buffer to the img.data property

    const savedImage = await image.save();
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

