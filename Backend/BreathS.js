const mongoose=require('mongoose');
const {Schema}=mongoose;

const Bsn=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'             // works as foriegn key for the user.js file
    },
    br:{
        type:Array,
        default:[]
    },
});

module.exports=mongoose.model('breaths',Bsn);


