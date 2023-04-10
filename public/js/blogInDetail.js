let blog_detail = document.querySelector(".blog-detail")
document.addEventListener("DOMContentLoaded", async () => {
    bl_id = location.href.split("/")[location.href.split("/").length - 1]
    console.log(bl_id)

    let pro = await fetch(`http://localhost:8000/blogs/${bl_id}`)
    let res = await pro.json()
    blog_detail.innerHTML = `
    <div class="full-blog">
    <h1 class="title">Title:</h1>
    <h3 class="title-body">${res.title}</h3>
    <h1 class="shortDescription">Short Description:</h1>
    <h3 class="shortDescription-body">${res.shortDescription}</h3>
    <h1 class="content">Content:</h1>
    <h3 class="content-body">${res.content}</h3>
    <div class="date-name">
        <div class="postedBy">PostedBy: ${res.postedBy}</div>
        <div class="date">Date: ${res.createdOn}</div>
    </div>
    <button type="button" class="btn btn-primary" id="profile">Go back To Profile</button>
</div>`
    let profile = document.querySelector("#profile")
    profile.addEventListener("click",()=>{
        location.href="http://localhost:8000/profile"
    })


})