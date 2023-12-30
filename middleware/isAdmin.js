const { notAdminError } = require("../Customerrors/notAdmin");

const isAdmin= (req,res,next)=>{
    
    const {isAdmin}=req.body;

    if(!isAdmin){
        throw new notAdminError("You are not admin");
      //  return res.send("you don't have any permission to access admin Dashboard")
    }
    next();
}

module.exports=isAdmin;
