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
