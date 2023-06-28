const mongoose= require("mongoose");
const {Schema}= mongoose;
const passportLocalMongoose = require('passport-local-mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema= new Schema({
    Uid:{
        type:String
    },
    username:{
        type: String,
    },
    email:{
        type:String,
        required:true,
        unique: false,
        max:50,
    },
    password:{
        type:String,
        required:true,
        min:2,
    }
});


userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// const User=mongoose.model("Users",userSchema);
// User.createIndexes();
module.exports=mongoose.model("Users",userSchema);