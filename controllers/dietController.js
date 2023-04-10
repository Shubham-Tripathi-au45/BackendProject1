//const mongoose = require("mongoose")
const dietModel = require("../models/dietModel")

//const getDietModel
const getDiet = async(req,res)=>{
    try{
        const diets = await dietModel.find()
        console.log(diets)
        res.send(diets)
    }
    catch(err){
        console.log("error in finding diet plans")
        res.send({stauts:"error"})
    }
}

const postDietModel = async(req,res)=>{
    dietData = req.body
    console.log(dietData)
    try{
       await dietModel.create(dietData)
        console.log("diet posted")
        res.send({status:"success"})
    }
    catch(err){
        console.log("error")
        res.send({status:"error in sendin diet to db"})
    }
}

module.exports  = {postDietModel,getDiet}