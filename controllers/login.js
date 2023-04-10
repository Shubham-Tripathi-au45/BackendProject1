// const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
const signupModel=require("../models/signup")
const path = require("path")
const pat = path.join(__dirname,"../")
const getLoginPage= (req,res) =>{
    res.sendFile(`${pat}public/html/login.html`)
}

const postLoginPage = async (req, res) => {
  const {email,password} = req.body
  try{
  const user = await signupModel.findOne({email})
  console.log(user,"found user by email")
  if(!user){
      res.redirect("http://localhost:8000/error")
  }
  const match =await bcrypt.compare(password,user.password)
  console.log("this is match",match)
  if(!match){
      console.log("password not matched")
      res.redirect("http://localhost:8000/error")
  }
  console.log("user found in db")
  const id = user._id
  const username = user.username
  console.log("just before payload")
  const userPayLoad = {email,id,username}
  const accessToken = jwt.sign(userPayLoad,process.env.AUTH_SECRET_KEY,{algorithm:"HS256",expiresIn:"1d"})
  console.log(accessToken,"this is accesstoken")
  res.cookie("jwt",accessToken,{maxAge:900000000})
  //res.redirect("http://localhost:8000/allBlogs")
  res.redirect("http://localhost:8000/profile")
  }
  catch(err){
      console.log("in catch block of postlogin user not found ")
      res.send({status:"error"})
  }
  //     const { email,password} = req.body
  
//     try {
//       const user = await signupModel.findOne({ email,password })
  
//       if (!user) {
//         res.status(401).send({ status: 'error', msg: 'User Not Found' })
//       }
//       //user is verfied
  
//       const userPayload = { email }
  
//       //token creation 
//       const accessToken = jwt.sign(userPayload, process.env.AUTH_SECRET_KEY ,{ algorithm: 'HS384', expiresIn: '1d' })
// //   console.log(accessToken)
//       res.cookie('jwt', accessToken, { maxAge: 900000 })
//       res.send({ status: 'success' })
  
//     } catch (err) {
//       res.status(401).send({ status: 'error', msg:"could not generate ticket" })
//     }
  }

module.exports={
    getLoginPage,postLoginPage
}