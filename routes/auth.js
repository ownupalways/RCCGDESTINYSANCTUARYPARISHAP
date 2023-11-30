const express = require("express")

const mysql = require("mysql")

const authController = require('../controllers/auth')

const router = express.Router()

router.post('/register', authController.register )



module.exports = router



