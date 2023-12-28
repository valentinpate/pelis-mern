const express = require('express')
const router = express.Router()
const myListControllers = require('../controllers/myListControllers')


router.post("/add-to-my-list",myListControllers.add_to_my_list)

