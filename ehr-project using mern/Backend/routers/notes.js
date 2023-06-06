const express=require('express');
const router=express.Router();
const fetchuser=require('../fetch');
const Note=require('../note.js');
const { body, validationResult } = require('express-validator');
const { findByIdAndUpdate } = require('../note.js');

router.get('/fetchall', fetchuser,  async (req, res) => {
    try {
      const notes = await Note.find({user : req.user.id});
      res.json(notes);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  });
  
  // 2: Add a new Note , Login required
router.post('/addnote', fetchuser, async (req, res) => {
      try {
        // using destructing method of javascript for send the requested data to corresponding fields
          const { name, age, Uid,email,gender,income,education,emp } = req.body;

          // If there are errors, return Bad request and the errors
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
          }
          //created a new note with "new" keyword
          //new note object  contain name...
          const newNote = {};
          if (name) { newNote.name = name };
          if (age) { newNote.age = age };
          if (Uid ) { newNote.Uid  = Uid  };
           //email,gender,income,education,emp
           if (email ) { newNote.email  = email  };
           if (gender ) { newNote.gender  = gender  };
           if (income ) { newNote.income  = income  };
           if (emp ) { newNote.emp  = emp  };
           if (education ) { newNote.education  = education  };
        //   let note1 = await Notebt.find({user : req.user.id});
           let note = await Note.findOneAndUpdate({Uid:Uid},req.body);
           console.log(note);

           if (!note) { 
            const note = new Note({
              name, age, Uid ,email,gender,income,education,emp, user: req.user.id
          })
          const savedNote = await note.save()
          // return the notes as the response
          res.json(savedNote);
            }
          else{
           //matching the existing user id with the login id
           console.log(note.Uid);
           if (note.Uid !== Uid) {     // checks whether the user login in is using his notes or other 
               return res.status(401).send("Not Allowed");
           }
           //find and update the data by findByIdandupdate
          // findByIdAndUpdate()
           note = await Note.findOneAndUpdate(req.params.Uid, { $set: newNote }, { new: true })   //sending the new note in place of the old note
           res.json({ note });
          }

      } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
      }
  })



  //  3: Update . Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
  //The PUT method is used to modify a single resource. The POST method is used to add a child resource
  // same PUT request multiple times will always produce the same result 
  const { name, age, Uid  } = req.body;
  try {
      // Create a newNote object
      const newNote = {};
      if (name) { newNote.name = name };
      if (age) { newNote.age = age };
      if (Uid ) { newNote.Uid  = Uid  };
       //email,gender,income,education,emp
       if (email ) { newNote.email  = email  };
       if (gender ) { newNote.gender  = gender  };
       if (income ) { newNote.income  = income  };
       if (emp ) { newNote.emp  = emp  };
       if (education ) { newNote.education  = education  };
      // Find the note to be updated and update it
      //getting the notes by findById method...
      let note = await Note.findOneAndUpdate({Uid:Uid},req.body,{new:true});
      if (!note) { return res.status(404).send("Not Found") }

      //matching the existing user id with the login id
      if (note.Uid.toString() !== Uid) {     // checks whether the user login in is using his notes or other 
          return res.status(401).send("Not Allowed");
      }
      //find and update the data by findByIdandupdate
     // findByIdAndUpdate()
      note = await Note.findOneAndUpdate(req.params.Uid, { $set: newNote }, { new: true })   //sending the new note in place of the old note
      res.json({ note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Delete . Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let note = await Note.findById(req.params.id);
      if (!note) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (note.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }

      note = await Note.findByIdAndDelete(req.params.id)
      res.json({ "Success": "Note has been deleted", note: note });
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})


  module.exports=router;