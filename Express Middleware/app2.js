///more routes
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("You've reached the home route!");
});

app.get('/about', (req, res) => {
    res.send('This is a practice app to learn about express routes.');
  });

  app.get('/:input', (req, res) => {
    res.send("Our parameter is " + req.params.input + ".");
  });



app.listen(8888);