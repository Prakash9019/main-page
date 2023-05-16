const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const { body, validationResult } = require('express-validator');
const File=require('../Medical');

router.post('/upload-image',fetchuser,async (req,res)=>{
    try{
     const {base64} =req.body;
   
       // If there are errors, return Bad request and the errors
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       }
      
       const note=new File({
           base64,user:req.user.id
       })
       const savedNote=await note.save();
       res.json(savedNote);
    //    Image.create({myfile:base64});
    //    res.send({status:"ok"});
      
    }
    catch(error){
         return res.status(400).json({error:error.message});
    }
    }
);

module.exports=router;

