const express = require("express")
const navRouter = express.Router()
const {getHome,getAbout,getMembership,getBMI} = require("../controllers/navController")
//getDietPlans,getHealthBlogs,getProfile
navRouter.get("/home",getHome)
navRouter.get("/about",getAbout)
navRouter.get("/membership",getMembership)
navRouter.get("/bmi",getBMI)
//












// 
// const {authMiddleware} = require("../middlewares/auth")
// navRouter.use(authMiddleware)
// navRouter.get("/dietPlans",getDietPlans)
// navRouter.get("/healthBlogs",getHealthBlogs)
// navRouter.get("/profile",getProfile)

module.exports = navRouter