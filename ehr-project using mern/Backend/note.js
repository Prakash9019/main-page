const mongoose= require("mongoose");
const {Schema}= mongoose;

const NotesSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    Uid:{
        type:String
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true, 
    },
    email:{
        type:String,
        required:true,
    },
    gender:{
        type: String,
        default: "male"
    },
    income:{
        type:String,
    },
    education:{
        type:String,
    },
    emp:{
        type:String,
    }
  });

  module.exports = mongoose.model('notes', NotesSchema);