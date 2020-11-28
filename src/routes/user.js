const express = require('express')
const { getAllUsers, addUser } = require('../controllers/user')
const router = express.Router()

router.get('/users', getAllUsers)
router.post('/user', addUser)

module.exports = router
