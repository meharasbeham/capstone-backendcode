const express=require("express");
const http=express();
const cors=require("cors");
const bodyparser=require("body-parser");
const {connectToDatabase}=require('./Database/data');
const PORT=3500;

connectToDatabase();
http.use(cors()),
http.use(express.json()),
http.use(bodyparser.json()),
http.set("view engine","ejs");




http.post('/Create',require("./Controlers/Countrolmenu"));
http.get('/',require("./Controlers/Countrolmenu"));

http.post('/Create/User',require("./Controlers/Countroluser"));
http.get('/User',require("./Controlers/Countroluser"));

    
http.listen (PORT,()=>{
    console.log("starting...");
});







