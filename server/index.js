const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');


app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


// this is quite a small change
var port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log('FlyingMongeese listening on PORT 3002!');
});