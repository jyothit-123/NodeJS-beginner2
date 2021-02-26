let express=require("express");
let app=express();
let route=require("./Routes/routing");
const bodyparser = require('body-parser');
let myReqLogger=require("./Utilities/requestLogger");


app.use(bodyparser.json());

app.use(myReqLogger);

app.use(route);

app.listen(1234,()=>{
    console.log("Server stated");
})

//npm i express
//npm i mongoose
//npm i body-parse
//npm install cookie-parser
//npm install express-session