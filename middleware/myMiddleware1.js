const myMiddleware1= (req,res,next)=>{
    
    const {token,isAdmin}=req.body;

    if(!token){
        return res.send("Kindly Login first")
    }

    req.isAdmin=isAdmin;
    next();
}

module.exports=myMiddleware1
