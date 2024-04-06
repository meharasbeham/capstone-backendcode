const mongoose=require("mongoose");
const MenuSchema=mongoose.Schema({
    Dishname:{
        type:String,
        require:true,
    },
    Method:{
        type:String,
        require:true,
    },
});
module.exports=mongoose.model("Menudata",MenuSchema);