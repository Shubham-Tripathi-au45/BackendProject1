const path = require("path")
const pat = path.join(__dirname,"../")
// for getting home page
const getHome = (req,res)=>{
    res.sendFile(`${pat}public/html/home.html`)
}
// for getting about page
const getAbout = (req,res)=>{
    res.sendFile(`${pat}public/html/about.html`)
}
// for getting membership page
const getMembership = (req,res)=>{
    res.sendFile(`${pat}public/html/membership.html`)
}
// for getting bmi page
const getBMI = (req,res)=>{
    res.sendFile(`${pat}public/html/bmi.html`)
}
// for getting dietplans page
const getDietPlans = (req,res)=>{
    res.sendFile(`${pat}public/html/dietPlans.html`)
}
// for getting healthblogs page
const getHealthBlogs = (req,res)=>{
    res.sendFile(`${pat}public/html/healthBlogs.html`)
}
// for getting health blogs profile
const getProfile = (req,res)=>{
    res.sendFile(`${pat}public/html/profile.html`)
}
module.exports = {getHome,getAbout,getMembership,getBMI,getDietPlans,getHealthBlogs,getProfile}