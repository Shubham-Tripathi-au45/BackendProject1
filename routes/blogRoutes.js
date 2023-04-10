const express = require("express")
const blogRouter = express.Router()
const {authMiddleware} = require("../middlewares/auth")
const {addBlogPage, getAllBlogs, getBlogById ,postBlogs,blogInDetailPage,delblog , updateBlogsPage ,updateBlog} = require("../controllers/blogController")
blogRouter.use(authMiddleware)
blogRouter.get("/blogs",getAllBlogs)
blogRouter.get("/blogs/:blogId",getBlogById)
blogRouter.get("/blogAddingPage",addBlogPage)
blogRouter.get("/blogInDetail/:blogId",blogInDetailPage)
blogRouter.get("/updateBlog/:blogID",updateBlogsPage)

blogRouter.put("/update/:blogID",updateBlog)
blogRouter.post("/addBlogs",postBlogs)

blogRouter.delete("/delete/:blogID",delblog)
module.exports = blogRouter