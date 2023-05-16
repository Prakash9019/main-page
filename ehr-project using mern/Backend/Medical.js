const mongoose=require('mongoose');
const {Schema}=mongoose;

const File= new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    myfile:{
        type:String
    }
});

module.exports=mongoose.model('medical',File)