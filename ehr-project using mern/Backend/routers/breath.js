const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const { body, validationResult } = require('express-validator');
const Bsn = require('../BreathS');
const { findByIdAndUpdate } = require('../note.js');


router.post('/addbs',fetchuser,[
    body('br', 'Enter a valid body rate')],async (req,res)=>{
    try{
     const {br} =req.body;
   
       // If there are errors, return Bad request and the errors
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       }
       const newNote = {};
       if (br) { newNote.br = br };
       let note1 = await Bsn.find({user : req.user.id});
       console.log(note1);
       if(!note1){
       const note=new Bsn({
        br,user:req.user.id
       })
       console.log(note);
       const savedNote=await note.save();
       res.json(savedNote);
      
      }
      
    //find and update the data by findByIdandupdate
   // findByIdAndUpdate()
    note1 = await Bsn.findOneAndUpdate(req.user.id, { $set: newNote }, { new: true })   //sending the new note in place of the old note
    res.json({ note1 });
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  
  })

  module.exports=router;