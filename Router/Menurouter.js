const Menumodels=require("../Models/Menumodels");

function GET(req,res,next){
    Menumodels.find()
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
    Menumodels.find()
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
    console.log(req.body)
const newMenudata= await Menumodels.create(req.body);
console.log(newMenudata);

    return res.status(200).json({
        message:'successful creating datas'
    });
}
module.exports={
    GET,
    POST,
    CREATE,
};