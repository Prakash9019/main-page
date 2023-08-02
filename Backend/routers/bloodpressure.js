const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const Notebp=require("../bp");
const { body, validationResult } = require('express-validator');
const { findByIdAndUpdate } = require('../note.js');


router.get('/fetchall', fetchuser,  async (req, res) => {
    try {
      const notes = await Notebp.find({user : req.user.id});
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });


router.post('/addbp',fetchuser,[
    body('bprate', 'Enter a valid bprate')],async (req,res)=>{
    try{
     const {bplimit,bprate} =req.body;
       // If there are errors, return Bad request and the errors
       const errors = validationResult(req);
       if (!errors.isEmpty()) {
           return res.status(400).json({ errors: errors.array() });
       }
       const newNote = {};
       if (bprate) { newNote.bprate = bprate };
       if (bplimit) { newNote.bplimit = bplimit };
     

       let note1 = await Notebp.find({user : req.user.id});
       if(note1.length===0){
       const note=new Notebp({
        bplimit,bprate,user:req.user.id
       })
       
       const savedNote=await note.save();
       res.json(savedNote);
      }
      else{
             note1 = await Notebp.findOneAndUpdate(req.user.id, { $set: newNote }, { new: true })   //sending the new note in place of the old note
             res.json({ note1 });
      }
      
      }
      catch(error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
      }
  
  })

  module.exports=router;