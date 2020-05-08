// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Users=express.Router();

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
Users.get('/:id', (req, res) => {
 // Book.findById(req.params.id)
   // .then(book => res.json(book))
    //.catch(err => res.status(404).json({ nobookfound: 'No Book found' }));
    var itemId = req.body.email;
    console.log(itemId);
    const db = require("./db");
    const dbName = "flatmate";
    const collectionName = "users";
    db.initialize(dbName, collectionName, function(dbCollection) { // successCallback
      var itemId = req.body.email;
      console.log(itemId);
      dbCollection.findOne({ 'email': itemId }, (error, result) => {
        if (error) throw error;
        // return item
        res.json(result);
    });
    }, function(err) { // failureCallback
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