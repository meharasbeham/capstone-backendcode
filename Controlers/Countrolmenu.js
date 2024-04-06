
const {GET,CREATE}=require("../Router/Menurouter");
const Menudata=require("express").Router();


Menudata.get("/",GET);
Menudata.post("/Create",CREATE);



module.exports=Menudata; 
 