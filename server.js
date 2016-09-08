const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static('build'));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});
app.listen(port, function(){
  console.log(`Server started on port ${port}`)
});
