const mongoose= require("mongoose");
const {Schema}= mongoose;

const Notesbt = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    btmeasure:{
        type:String
    },
    datalist:{
        type: String,
    },
    temp:{
        type: String,
    },
  });

  module.exports = mongoose.model('bodytemp', Notesbt);