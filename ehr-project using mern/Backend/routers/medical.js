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
 
// const convertToBase64=(req.file)=>{
// //return(console.log("fine"));
// };
 
// API endpoint for fetching all images
router.get('/imagesw',fetchuser, async (req, res) => {
  try {
    const images = await Model.find({user:req.user.id});

    // Convert image data to base64 format
    const base64Images = images.map((image) => ({
      _id: image._id,
      name: image.name,
      img: image.img.data.toString('base64'),
      contentType: image.img.contentType,
    }));

    res.status(200).json(base64Images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch images');
   }
});


// API endpoint for fetching all images
router.get('/images',fetchuser, async (req, res) => {
    try {
      const images = await Model.find({user:req.user.id});
      res.json(images);
    } catch (error) {
      res.status(500).send('Failed to fetch images');
    }
  });
  
  // API endpoint for serving individual images
  router.get('/api/image/:id', async (req, res) => {
    try {
      const image = await Model.findById(req.params.id);
  
      if (!image) {
        return res.status(404).send('Image not found');
      }
  
      res.set('Content-Type', image.img.contentType);
      res.send(image.img.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Failed to fetch image');
    }
  });
  

router.post('/upload-image', upload.single('myfile'), fetchuser,async (req, res) => {
  
   // console.log(req.body);
//    let image = (req.file) ? req.file.filename :null;
  // console.log(image);
     console.log(req.user.id);

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

