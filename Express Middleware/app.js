const express = require('express');
const morgan = require('morgan');  //import morgan also npm i morgan
const app = express();


// const app = express();
// app.use(morgan('dev'));
// app.use(express.json());
// app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.send('Hello, World!');
});

app.listen(4200);