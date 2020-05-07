const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
let Users = require('./models/user.model');
//
app.use(cors());
app.use(bodyParser.json());
const userRoutes = express.Router();
app.use('/users', userRoutes);
//https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1
userRoutes.route('/').get(function (req, response) {
  const MongoClient = require('mongodb').MongoClient;
  //pasword : - > wwmts3kQNkDAqDJZ
  var DATABASE_NAME="myflatemate";
  const uri = "mongodb+srv://flatmateadmin:wwmts3kQNkDAqDJZ@myflatematecluster-fedlk.gcp.mongodb.net/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true });
  client.connect(err => {
    database = client.db(DATABASE_NAME);
    collection = database.collection("users");
    collection.find().toArray((error, result) => {
      if(error) {
        console.log(error);
          return response.status(500).send(error);
      }
      console.log(result);
      response.send(result);
  });



    console.log("Connected to `" + DATABASE_NAME + "`!");
    client.close();
  });

});















app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});