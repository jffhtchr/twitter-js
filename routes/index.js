'use strict';
const path = require('path');
const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
router.use(express.static(path.join(__dirname, '../public')));

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: list } );
});

router.get("/tweets/:id", function (req, res){
    var id = +req.params.id;
    var list = tweetBank.find( ['id', id] );
    res.render("index", {tweets: list});
});

module.exports = router;

// var locals = {
//     title: 'An Example',
//     people: [
//         {name: 'Gandalf'},
//         {name: 'Frodo'},
//         {name: 'Hermione'}
//     ]
// };


// app.get( '/people', function( request, response ) {
//     return response.render( 'index.html', locals) ;
// } ) ;
