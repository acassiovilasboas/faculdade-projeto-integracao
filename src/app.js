const express = require('express')
const app = express()

app.use(express.json())

const index = require('./routes/index')

app.use('/', index)

module.exports = app
