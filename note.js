/* 
steps 
========================

1. run the commend : mkdir project-name
2. go to that file.
3. run the commend: npm init -y 
4. run the commend: npm i express cors 
mongodb 
* . install nodemon if you use nodemon for the first time, commend: npm install -g nodemon.
5. go to package.json > under script, write: 
    "start": "node index.js",
    "start-dev": "nodemon index.js",

6. create a file called index.js.
7. in index.js file, write:

a. const express = require('express)
b. const app = express();
c. const port = process.env.PORT || 5000;
d. app.get("/", (req, res) =>{
    res.send("running my node crud server"); 
});
e. app.listen(port, () =>{
    console.log("crud server is running")
})

8. to run the server, run the commend: npm run start-dev. 

====MongoDb==========

9. go to mongoDB atlous.

10. create user (copy and paste the username and password in a safe place.)

11. create user 

12. go to network access.

13. access the network from everywhere.

14. go to database tab.

15. press connect

16. press connect your application.

17. select node.js and default setting version.

18. press "include full diver code example" and copy the code.

19. paste the code in the index.js file. replace the password with real password.

20. you can change the project name to anything from "test", what kind of data you would like to store is called "collection(array), you can change it as well to anything."

21. go to Node mongoDB crude

22. go to "Usage Example" > "inset a Document" > copy the code from async function and replace with previously copied mongoDB code's function.

23. the function example:
async function run(){
    try{
        await client.connect();
        const userCollection = client.db("foodExpress").collection("user");
        const user = {name: "Hasan", email:"hasan@gmail.com"}
        const result = await userCollection.insertOne(user)
        console.log(`User inserted with id: ${result.insertedId}`);


    }
    finally{
        await client.close();
    }

}
run().catch(console.dir)

24. use middleware in index.js


app.use(cors());
app.use(express.json());



1. client side: create form
2. on submit : get form data and create user object.
3. on server: create user POST method to receive data on the backend.
4. on Client side: set fetch with POST, headers,body
5. make sure you return a json from the post api.
=====================

what is the difference between mongoDB vs mySQL.

what is noSQL?









 */