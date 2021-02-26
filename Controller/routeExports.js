const validators=require("../Utilities/validator");
const myModel=require("../Model/myMongoose");

//post method
exports.createUser=(req,res)=>{
  let userData = req.body;
  let nameValidate=validators.ValidateName(userData.noteName);
  if(nameValidate){
    myModel.create(userData).then(()=>{
      res.status(201).json({
        status:"Success",
        message:"Data inserted"
      })
    }).catch((err)=>{
      res.status(400).json({
        status:"fail",
        message:err.message
      })
    })

  }else{
    res.status(400).json({
      status:"fail",
      message:"Name is invali"
    })
  }
}


//getmethod
exports.getAllUsers=async(req,res)=>{
  try{
    let userData=await myModel.find();
    if(userData.length>=1){
      res.status(200).json({
      status:"Success",
      data:userData
      });
    }else{
      res.status(400).json({
        status:"Failure",
        data:"No Data is present"
      });
    }
  }catch(err){
    res.status(400).json({
      status:"Fail",
      message:err.message
    });
  }
}


//get specific
exports.getSpecificUsers=async(req,res)=>{
  try{
    let noteId=req.params.noteId;
    let userData=await myModel.findOne({noteId:noteId});
    if(userData){
      res.status(200).json({
        status:"Success",
        data:userData
        });

    }else{
      res.status(400).json({
        status:"Failure",
        message:"User Not found with "+noteId +" inside database"
        });
    }
    
  }
  catch(err){
    res.status(400).json({
      status:"Fail",
      message:err.message
    });
  }
}



//update
exports.updateNote=async(req,res)=>{
  try{
    let updateData=req.body;
    let userData=await myModel.updateOne({noteId:updateData.noteId},updateData);
    if(userData.nModified===1){
      res.status(200).json({
        status:"success",
        message:"Data updated succesfully"
      });
    }else{
      res.status(400).json({
        status:"failure",
        data:"user not updated in "+noteId
      })
    }

  }catch(err){
    res.status(400).json({
      status:"Failure",
      message:err.message
    });
  }
}


//delete
exports.deleteNote=async(req,res)=>{
  try{
    let noteId=req.params.noteId;
      const delDet = await myModel.deleteOne({ noteId:noteId });
      if (delDet.deletedCount === 0) {
        res.status(404).json({
          status: 'fail',
          message: 'No notes available for this ID',
        });
      } else {
        res.status(200).json({
          status: 'success',
          message: `Notes with ${req.params.id} ID deleted`,
        });
      }
    }catch(err){
      res.status(400).json({
        status:"Failure",
        message:err.message
      });
    }
  };

  //invalid
  exports.invalidNote=async(req,res)=>{
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path',
      });
    };
 
