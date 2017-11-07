const express = require( 'express' );
const app = express();
const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
});

app.use(function (request, response, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(request.method + ' ' + request.originalUrl);
    next();
})

app.get("/", (request, response) => {
    response.send('HI THERE!');
})