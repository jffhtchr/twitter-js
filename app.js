/* jshint node: true, esversion: 6 */


const express = require('express');
const app = express();
const PORT = 3000;
const nunjucks = require('nunjucks');

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});

app.use(function (request, response, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(request.method + ' ' + request.originalUrl);
    next();
});

app.get('/', (request, response) => {
    response.send('HI THERE!');
});

var locals = {
    title: 'An Example',
    people: [
        {name: 'Gandalf'},
        {name: 'Frodo'},
        {name: 'Hermione'}
    ]
};

var PATH_TO_TEMPLATES = 'views';
nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: true,
    express: app
});

app.get( '/people', function( req, res ) {
    return res.render( 'index.html', locals) ;
} ) ;
