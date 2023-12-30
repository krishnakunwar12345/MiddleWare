const notAdminError = require("../Customerrors/notAdmin");

const erroMiddleware= (err,req,res,next)=>{
    console.log(err);
    if(err instanceof notAdminError){
        next(err);
    }
    else{
        res.status(500).send("Something went wrong")
    }
    
}

const erroMiddleware2=(err,req,res,next)=>{
    res.status(400).send('Bad request');
}
module.exports={erroMiddleware,erroMiddleware2};