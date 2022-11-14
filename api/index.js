import express from "express";
const app = express();
import { Users } from "./users.js";
import cors from "cors";

app.use(cors());

app.get("/", (req, res) => {
 //res.json(Users); // render all USERS data in http://localhost:5000/

 const { query }  = req.query; //?query=sdasdsads

 const keyFieldsTable = ["first_name", "last_name", "email"];

 const search = (data) =>{
  //search in all colons --> first_name, last_name, email...
  return (
    data.filter( (item) => keyFieldsTable.some((allProps) => item[allProps].toLowerCase().includes(query)) )
  );
};
////////////////////////////////////////////////////////////////////////
//const users = Users.find({$regex: q}); // analog search in MongoDB 
////////////////////////////////////////////////////////////////////////

query ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
 //res.json(Users.slice(0,10)); //show only 10 random results in beginning
});

app.listen(5000, () => console.log("API is working! on: http://localhost:5000/"));
