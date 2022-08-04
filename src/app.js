const express = require('express')
const app = express()
const router = express.Router()
//Rotas
const index = require('./routes/index');
const playList = require('./routes/Route');
app.use('/', index);
app.use('/play-list', playList);
module.exports = app;