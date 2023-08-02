const mongoose= require("mongoose");
const {Schema}= mongoose;

const Notesbp = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    bplimit:{
        type: Array,
        default:[]
    },
    bprate:{
        type: Array,
        default:[]
    }
  });

  module.exports = mongoose.model('bodypre', Notesbp);