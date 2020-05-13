// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Users = express.Router();

// @route GET api/books/test
// @description tests books route
// @access Public
Users.get('/', (req, res) => res.send('book route testing!'));



// @route GET api/books
// @description Get all books
// @access Public

// @route GET api/books/:id
// @description Get single book by id
// @access Public
Users.post('/:id', (req, res) => {

 
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "users";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    var itemId = req.body.email;
    
  //  console.log("this is item-"+itemId);
 // dbCollection.findOne({ 'email': itemId }, (error, result) => {
    dbCollection.findOne({ 'email': 'axix.szabist@gmail.com' }, (error, result) => {
      if (error) throw error;
      // return item
     // console.log(result);
     // console.log(error);
      res.json(result);
    });
  }, function (err) { // failureCallback
    throw (err);
  });




});

Users.post('/register', (req, res) => {
  var itememail = req.body.email;
  var itemname = req.body.userid;
  var itemphone = req.body.phone;
  var itempassword = req.body.password;

  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "users";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    var itememail = req.body.email;
    var itemname = req.body.name;
    var itemphone = req.body.phone;
    var itempassword = req.body.password;
    dbCollection.insert({ 'userid': itemname, 'email': itememail, 'password': itempassword, 'active': '1', }, (error, result) => {
      var _userId = result["ops"][0]["_id"];
      if (error) throw error;
      // return item
      res.json(_userId);
    });
  }, function (err) { // failureCallback
    throw (err);
  });


});

// @route GET api/books
// @description add/save book
// @access Public
Users.post('/', (req, res) => {
  console.log("insdie get router");
});

// @route GET api/books/:id
// @description Update book
// @access Public
Users.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
Users.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = Users;