const {getUserById} = require("../controllers/userController")
const {authMiddleware} = require("../middlewares/auth")

const express = require("express")
const userR = express.Router()
userR.use(authMiddleware)
userR.get("/user",getUserById)

module.exports = userR