log =(req,res,next)=>{
    console.log("Loging user details.....");
    next();
};

module.exports=log;