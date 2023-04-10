const express=require("express")
const userRouter=express.Router()

const multer=require("multer")
const { getLoginPage, postLoginPage } = require("../controllers/login")
const { getSign, postSign,postLogOut, getError} = require("../controllers/Signup")
const upload=multer({storage:multer.memoryStorage()})

//routes
userRouter.get('/signup',getSign)
userRouter.post('/signup',upload.single("image"),postSign)
// userRouter.get('/membership',getMembership)
userRouter.get('/login',getLoginPage)
userRouter.post('/login',postLoginPage)
userRouter.get("/logout",postLogOut)
userRouter.post("/logout",postLogOut)
userRouter.get('/error',getError)

module.exports=userRouter
