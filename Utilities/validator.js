let userValidateName={};

userValidateName.ValidateName=(name)=>{
  if (name.trim().length > 0) {
          return true;
        }
        return false;
      };
module.exports=userValidateName;
