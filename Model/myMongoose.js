const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("DB connection successful");
});

const mySchema=new mongoose.Schema({
    noteId:{
        type:Number,
        unique:true,
        required: [true,"Required field"],
    },
    noteName:{
        type:String,
        required:[true,"Required field"],
    },
    noteData:{
        type:String,
    }
});

const myModel=mongoose.model("mynotes",mySchema);

module.exports=myModel;