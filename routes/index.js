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
  var name = req.params.name; //jeff hatcher
  name = name.split(' '); //[jeff, hatcher]
  name[0] = name[0][0].toUpperCase() + name[0].slice(1); //J eff
  name[1] = name[1][0].toUpperCase() + name[1].slice(1); //H atcher
  name = name.join(' '); //Jeff Hatcher
  var list = tweetBank.find( ['name', name] );
  res.render( 'index', { tweets: list } );
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
