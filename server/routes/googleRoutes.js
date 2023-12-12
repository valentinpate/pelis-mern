const express = require('express')
const router = express.Router()
const googleControllers = require('../controllers/googleControllers')


router.get('/google',googleControllers.google_get)
router.get('/google/callback',googleControllers.google_callback_get)

module.exports = router