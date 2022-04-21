const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//user: dbuser1
//password: qastIzFIGgvdPwCY



const uri = "mongodb+srv://dbuser1:qastIzFIGgvdPwCY@cluster0.mz24q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("FoodExpress").collection("users");
  console.log("db connected");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) =>{
    res.send("running my node crud server");
})


app.listen(port, () =>{
    console.log("crud server is running")
})