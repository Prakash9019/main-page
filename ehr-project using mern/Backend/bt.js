const mongoose= require("mongoose");
const {Schema}= mongoose;

const Notesbt = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    btmeasure:{
        type: Array,
        default:[]
    },
    datalist:{
        type: Array,
        default:[]
    },
    temp:{
        type: Array,
        default:[]
    },
  });

  module.exports = mongoose.model('bodytemp', Notesbt);