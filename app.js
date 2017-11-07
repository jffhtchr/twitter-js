/* jshint node: true, esversion: 6 */


const express = require('express');
const app = express();
const PORT = 3000;
const nunjucks = require('nunjucks');

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

const routes = require('./routes');
app.use('/', routes);

app.use(function (request, response, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(request.method + ' ' + request.originalUrl);
    next();
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });
