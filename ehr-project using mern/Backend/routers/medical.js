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
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname)
    }
});
//, limits:{fileSize: maxSize} 
 const maxSize=40 *1024*1024;
var upload = multer({ storage: storage});
 

 
router.post('/upload-image', upload.single('myfile'), async (req, res) => {
    let image = (req.file) ? req.file.filename :null;
  
   let data=new Model();
   data.name=req.file.originalname;
  // console.log(path.join(__dirname + '/uploads/'+req.file.originalname));
   fs.writeFileSync(req.file.originalname,req.file.filename);
   data.img.data=fs.readFileSync(path.join("D:/mini-pro/main-page/ehr-project using mern/" + req.file.originalname));
   data.img.contentType='image/png';
   const savedNote=await data.save();
   console.log(savedNote);
   res.json(savedNote);
   
    });


module.exports=router;

