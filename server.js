const express = require('express');
const path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));




let server = app.listen(8000, function(){
  console.log('server 8000');
})

