const express  = require("express")
const app = express()
require("dotenv").config()


const cookieParser  = require("cookie-parser")
const navRouter = require("./routes/navRoutes")
const dietRouter = require("./routes/dietRoutes")
const userRouter =require("./routes/signup")
const blogRouter = require("./routes/blogRoutes")
const userR = require("./routes/userRoutes")
const authNavRouter = require("./routes/authnav")
const {initDB} = require("./dbconfig")




initDB()
app.listen(8000,()=>{console.log("server started at port 8000")})
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",navRouter)
app.use("/",dietRouter)
app.use("/",userRouter)
app.use("/",blogRouter)
app.use("/",userR)
app.use("/",authNavRouter)