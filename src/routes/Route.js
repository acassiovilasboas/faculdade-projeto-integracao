const express = require('express')
const router = express.Router()
const getCredentials = require('../controllers/getCredentials')
const playList = require('../controllers/playList')

router.post('/token', getCredentials.post)

router.get('/', playList.get)
router.post('/', playList.post)
router.put('/:id', playList.put)
router.delete('/:id', playList.delete)
module.exports = router