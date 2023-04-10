const express = require("express")
const dietRouter = express.Router()
const {postDietModel,getDiet} = require("../controllers/dietController")

dietRouter.get("/getDiet",getDiet)
dietRouter.post("/postDiet",postDietModel)

module.exports = dietRouter