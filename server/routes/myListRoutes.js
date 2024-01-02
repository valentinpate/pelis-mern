const express = require('express')
const router = express.Router()
const myListControllers = require('../controllers/myListControllers')


router.post("/add-to-my-list",myListControllers.add_to_my_list)

router.delete("/delete-from-my-list/:id/:profId/:movieId",myListControllers.delete_from_my_list)

router.post("/get-my-list", myListControllers.get_my_list)

module.exports = router