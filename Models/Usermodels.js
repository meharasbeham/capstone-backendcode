const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    Username:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
    },
    Password:{
        type:String,
        require:true,
    },
    
});
module.exports=mongoose.model("Userdata",UserSchema);