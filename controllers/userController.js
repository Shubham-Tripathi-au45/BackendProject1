const signupModel=require("../models/signup")

const getUserById = async(req,res)=>{
    const userID = req.userData.id
    console.log(userID)
    try{
        const users = await signupModel.findById(userID)
        console.log(users)
        console.log('success in finding user')
        res.send(users)
    }
    catch(err){
        console.log("error in findind single user by id")
         res.send({status:"error"})
    }
}

module.exports  = {getUserById}