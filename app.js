const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authenticate = require('./utils/auth');
const games = require('./routes/games')
const auth = require('./routes/auth')
const port = process.env.PORT || 8080


const app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',authenticate.token,games);
app.use('/auth',authenticate.token,auth)

app.listen(port);

module.exports = app;
