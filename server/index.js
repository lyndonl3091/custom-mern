const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

// DB setup
const mongoUrl = process.env.MONGODB_URI  || 'mongodb://localhost/insert-name';

mongoose.connect(mongoUrl, err => {
  console.log(err || `MongoDB connected to ${mongoUrl}`);
})


// App setup
app.use(morgan('dev'));
app.use(bodyParser.json({ type: '*/*' }));
app.use(express.static('public'))

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '..', '/index.html'));
});



// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
