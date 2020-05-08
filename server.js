const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;


app.use(cors());
app.use(bodyParser.json());
const userRoutes = require('./Users');
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', userRoutes);


app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});