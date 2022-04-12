const express = require('express')
const router = express.Router()
const { getNovels, setNovel } = require('../controllers/novelContainer')

router.route('/').get(getNovels).post(setNovel)

module.exports = router