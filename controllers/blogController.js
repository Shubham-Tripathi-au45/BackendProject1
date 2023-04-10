const signupModel = require("../models/signup")
const blogModel = require("../models/blogModel")
const path = require("path")
const pat = path.join(__dirname, "../")
const addBlogPage = (req, res) => {
    res.sendFile(`${pat}public/html/addBlog.html`)
}
const blogInDetailPage = (req,res)=>{
    res.sendFile(`${pat}public/html/blogInDetail.html`)
}
const updateBlogsPage = (req,res)=>{
    res.sendFile(`${pat}public/html/updateBlog.html`)
}
const getAllBlogs = async (req, res) => {
    //pagination part
    //const {page,size} = req.params
    try {
        //part of pagination
        // const blogs = await blogModel.find().skip(size*(page-1)).limit(size)
        const blogs = await blogModel.find()
        console.log(blogs)
        res.send(blogs)
    }
    catch (err) {
        console.log("error in finding blogs")
        res.send({ status: "error" })
    }
}
const getBlogById = async (req, res) => {
    const { blogId } = req.params
    try {
        const blog = await blogModel.findById(blogId)
        console.log("found blog by id")
        res.send(blog)
    }
    catch (err) {
        console.log("error in finding blog by id")
        res.send({ status: "error" })
    }
}
const postBlogs = async (req, res) => {
    const blogData = req.body
    console.log(blogData,"this is blogdata")
    console.log(req.userData)
    blogData.createdBy = req.userData.id
    blogData.postedBy = req.userData.username
    console.log("inside post blogs")
    console.log("final blog",blogData)
    try {
        console.log("inside try")
        const blogs =await blogModel.create(blogData)
        console.log("sab bdya hai seth ji")
        console.log(blogs)
        console.log("blogs created")
        res.redirect("http://localhost:8000/profile")
    }
    catch (err) {
        console.log("error in creating blogs")
        res.send({ status: "error" })
    }
}
const delblog = async (req, res) => {
    const { blogID } = req.params
    console.log("inside delblog")
    try {
        const blog = await blogModel.findById(blogID)
        const users = await signupModel.findById(req.userData.id)
        if((blog.createdBy===req.userData.id)||(users.isAdmin)){
        const del = await blogModel.findByIdAndRemove(blogID)
        console.log(del)
        console.log("del worked")
        res.send({ status: 'success' })
    }
    else{console.log("you are not authorized")}
    }
    catch (err) {
        console.log("can not delete")
    }
}
const updateBlog = async (req, res) => {
    const { blogID } = req.params
    const updateBlogData = req.body
    try {
        
        //const updateResult = await blogModel.findByIdAndUpdate(blogID, updateBlogData, { new: true, runValidators: true })
        const updateResult = await blogModel.findOneAndUpdate({_id:blogID,createdBy:req.userData.id},updateBlogData, { new: true, runValidators: true })
        res.send({ status: "updated successfully" })
    }
    catch (err) {
        console.log("error in updating blog")
        res.send({ status: "error in updating blogs" })
    }
}
module.exports = {addBlogPage, getAllBlogs, getBlogById ,postBlogs, blogInDetailPage, delblog , updateBlogsPage , updateBlog}