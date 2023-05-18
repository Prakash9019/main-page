const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const { body, validationResult } = require('express-validator');
const Model=require('../Medical');
var fs=require('fs');
var path = require('path');

var app = express();

  app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

var bodyParser = require('body-parser')



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true,parameterLimit:100000,limit:"50mb" }))
app.use(bodyParser.json())
// parse application/json


// POST /login gets urlencoded bodies

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
//, limits:{fileSize: maxSize} 
 const maxSize=40 *1024*1024;
var upload = multer({ storage: storage});
 

 
router.post('/upload-image', upload.single('myfile'), async (req, res) => {
    console.log("oye....");
    let image = (req.file) ? req.file.filename :null;
    console.log("it is image"+image);
    console.log("hello");
    var obj = {
        name: req.body.name,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + myfile.filename)),
            contentType: 'image/png'
        }
    }
    Model.create(obj).then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("all done");
            res.redirect('/');
        }
    });
//     const {originalname,mimetype,path} =req.file;

//  const image=new Model({
//     name:originalname,
//     contentType:mimetype,
//     data: {
//            type:"Buffer",
//             data: fs.readFileSync(path),
//         },
//         user:req.user.id
//  })
//  console.log("image is saved");
//  const savedNote=await image.save();
//  res.json(savedNote);
//  console.log("image is saved");
});

// router.post('/upload-image',urlencodedParser,async (req,res)=>{
//     try{
//      const {base64} =req.body;
//      console.log("ok"+ base64)
//        // If there are errors, return Bad request and the errors
//        const errors = validationResult(req);
//        if (!errors.isEmpty()) {
//            return res.status(400).json({ errors: errors.array() });
//        }
      
//        const note=new File({
//            base64,user:req.user.id
//        })
//        console.log("hi" + note);
//        const savedNote=await note.save();
//        res.json(savedNote);
//     //    Image.create({myfile:base64});
//     //    res.send({status:"ok"});
      
//     }
//     catch(error){
//          return res.status(400).json({error:error.message});
//     }
//     }
// );

module.exports=router;

