const Usermodels=require("../Models/Usermodels");

function GET(req,res,next){
    Usermodels.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No datas found",
            
            });
            
           
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"data fetched successfully",
            });
        }
    })

    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
}


function POST(req,res,next){
    Usermodels.find()
    .then ((response)=>{
        if (response.length<1){
            return res.status(200).json({
                success:true,
                data:response,
                message:"No datas found",
            
            });
            
           
        }else
        {
            return res.status(200).json({
                success:true,
                data:response,
                message:"data fetched successfully",
            });
        }
    })

    .catch((e)=>{
        return res.status(402).json({
            success:false,
            erroe:e,
            message:"something went wrong",
        });
    });
}


    
async function CREATE(req,res,next){
const newUserdata= await Usermodels.create(req.body);
console.log(newUserdata);

    return res.status(200).json({
        message:'successful creating datas'
    });
}
module.exports={
    GET,
    POST,
    CREATE,
};