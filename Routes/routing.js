let express=require("express");
let route=express.Router();
let notes=require("../Controller/routeExports");

route.get("/allUsers",notes.getAllUsers);
route.get("/user/:noteId",notes.getSpecificUsers);
route.post("/notes",notes.createUser);
route.put("/updateNote",notes.updateNote);
route.delete("/deleteNote/:noteId",notes.deleteNote);
route.all("*",notes.invalidNote);


module.exports=route;