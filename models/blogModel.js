const mongoose= require("mongoose")
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    shortDescription:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    postedBy:{
        type:String,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
})
const blogModel = mongoose.model("blogs",blogSchema)
module.exports = blogModel