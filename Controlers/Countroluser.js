const {CREATE}=require("../Router/Userrouter");
const Userdata=require("express").Router();
Userdata.post("/Create/User",CREATE);


module.exports=Userdata;
