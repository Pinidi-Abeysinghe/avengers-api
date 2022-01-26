auth =(req,res,next)=>{
    console.log("Authenticating user.......");
    next(); //Important to tell to go to the next middleware
  };

  module.exports = auth;