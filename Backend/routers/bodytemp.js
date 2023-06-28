const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const Notebt=require("../bt");
const { body, validationResult } = require('express-validator');
const { findByIdAndUpdate } = require('../note.js');


router.get('/fetchall', fetchuser,  async (req, res) => {
    try {
      const notes = await Notebt.find({user : req.user.id});
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });


router.post('/addbt',fetchuser,[
    body('btmeasure', 'Enter a valid btmeasure')],async (req,res)=>{
    try{
     const {btmeasure,datalist,temp} =req.body;
       // If there are errors, return Bad request and the errors
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       }
       const newNote = {};
       if (btmeasure) { newNote.btmeasure = btmeasure };
       if (datalist) { newNote.datalist = datalist };
       if (temp ) { newNote.temp  = temp };

       let note1 = await Notebt.find({user : req.user.id});
       if(note1===null){
       const note=new Notebt({
        btmeasure,datalist,temp,user:req.user.id
       })
       
       const savedNote=await note.save();
       res.json(savedNote);
      }
      else{
             note1 = await Notebt.findOneAndUpdate(req.user.id, { $set: newNote }, { new: true })   //sending the new note in place of the old note
             res.json({ note1 });
      }
      
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  
  })

  module.exports=router;