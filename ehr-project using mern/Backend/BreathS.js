const mongoose=require('mongoose');
const {Schema}=mongoose;

const NotesSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    br:{
        type:Array,
        default:[]
    }
});

module.exports=mongoose.model('breathS',NotesSchema);
