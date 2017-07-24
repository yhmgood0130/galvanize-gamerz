const express = require('express');
const app = express();
const cors = require('cors');
const games = require('./routes/games')
const port = process.env.PORT || 8080

app.use(cors());
app.use('/',games);

app.listen(port);

module.exports = app;
