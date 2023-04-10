const express = require("express")
const authNavRouter = express.Router()
const {getDietPlans,getHealthBlogs,getProfile} = require("../controllers/navController")

const {authMiddleware} = require("../middlewares/auth")
authNavRouter.use(authMiddleware)
authNavRouter.get("/dietPlans",getDietPlans)
authNavRouter.get("/healthBlogs",getHealthBlogs)
authNavRouter.get("/profile",getProfile)

module.exports = authNavRouter