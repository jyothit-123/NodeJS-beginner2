let fs=require("fs");
let requestLogger=(req,res,next)=>{
  fs.appendFile("Logger","Request from the server"+req.url + " on "+new Date().toDateString()+"\n",(err)=>{
    if(err){
      console.log("Error occured while logging");
    }
    else{
      console.log("Request logged successfully");
    }
    next();
  })
}
module.exports = requestLogger;