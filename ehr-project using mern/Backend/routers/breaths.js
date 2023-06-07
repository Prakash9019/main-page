const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const { body, validationResult } = require('express-validator');
const Bsn = require('../BreathS.js');
const { findByIdAndUpdate } = require('../note.js');

router.get('/fetchall', fetchuser,  async (req, res) => {
  try {
    const notes = await Bsn.find({user : req.user.id});
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

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
    
       if(note1.length===0){
       const note=new Bsn({
        br,user:req.user.id
       });
      
       const savedNote=await note.save();
       res.json(savedNote);
      console.log(savedNote);
      }
      
      else{
        note1 = await Bsn.findOneAndUpdate(req.user.id, { $set: newNote }, { new: true })   //sending the new note in place of the old note
        res.json({ note1 });
      }
      
    //find and update the data by findByIdandupdate
   // findByIdAndUpdate()
    
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  
  })

  module.exports=router;