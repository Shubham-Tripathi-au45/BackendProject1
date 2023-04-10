
const cloudinary= require("cloudinary").v2
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
const signupModel=require("../models/signup")
const base64=require("js-base64")
const path = require("path")
const pat = path.join(__dirname,"../")
//Render SIGNUP.html to server routes
const getSign = (req,res) =>{
    res.sendFile(`${pat}public/html/signup.html`)
}
cloudinary.config({ 
    
    cloud_name: "dhpz0e0ai",//process.env.CLOUD_NAME, 
   api_key: '625795272741961', 
   api_secret: 'R21-Uzv8S0P51NuzzR2RLLy8Dfw' 

 })

//POST DETAILS IN SIGNUP PAGE

const postSign = async (req,res) =>{
    const userData=req.body
    const {password} = userData
    const hashedpass = await bcrypt.hash(password,5)
    // console.log(userData)
    const fileData=req.file
    // console.log(req.file)
    if (fileData) {
        //convert buffer to base64
        const base64FileData = base64.encode(fileData.buffer)
        // console.log(base64FileData)
        // console.log(fileData)
        cloudinary.uploader.upload(`data:${fileData.mimetype};base64,${base64FileData}`,async function(error, response) {
          if (error) {
            res.status(500).send({ status: 'Error Occured in uploading file' })
          }
          userData.imageURL = response.secure_url //{name, price, location,description, imageUrl}
          userData.password = hashedpass //putting hashedpassword in userdata
         
    try{
        const newData= await signupModel.create(userData)
        res.redirect("http://localhost:8000/login")
    }
    catch(err){
        res.send(err)
    }
        })
}
}

const postLogOut = (req,res)=>{
    res.cookie("jwt","",{maxAge:1})
    console.log("loggedout")
    res.redirect("http://localhost:8000/login")
}
// const getMembership = (req,res) =>{
//     res.sendFile("C:/Users/91760/OneDrive/Desktop/PROJECT/backend-project-Sardik-Bhardwaj-au45/AttainU project/public/html/membership.html")
// }
const getError=(req,res) =>{
    res.sendFile("C:/Users/91760/OneDrive/Desktop/PROJECT/backend-project-Sardik-Bhardwaj-au45/AttainU project/public/html/error.html")
}
module.exports={
    postSign,getSign,postLogOut,getError
}
