const mongoose= require("mongoose")
const signupSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    BMI:{
        type:String,
    },
    imageURL:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

    membership:{
        type:String
    }
    })

    const signupModel = mongoose.model("Constumer_details",signupSchema)
    module.exports = signupModel