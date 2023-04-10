let profile = document.querySelector(".profile-data")
let footer = document.querySelector(".footer")
let user_blog = document.querySelector(".your-blogs")
let mid = document.querySelector(".mid-section")
document.addEventListener("DOMContentLoaded", async () => {
    footer.classList.add("dynamic-footer")
    let pro = await fetch("http://localhost:8000/user")
    let res = await pro.json()
    console.log(res)
    if (res.isAdmin) { mid.innerHTML = `<h3>Hii Admin you can add your own blogs as well as you can delete any of the health blogs</h3>` }
    profile.innerHTML = `<div class="profile-flex">
    <div><img
            src="${res.imageURL}">
    </div>
    <div class="flex-profileData">
        <div>NAME:</div>
        <div>${res.name}</div>
    </div>
    <div class="flex-profileData">
        <div>User Name:</div>
        <div>${res.username}</div>
    </div>
    <div class="flex-profileData">
        <div>Email:</div>
        <div>${res.email}</div>
    </div>
    <div class="flex-profileData">
        <div>BMI:</div>
        <div>${res.BMI}</div>
    </div>
    <div class="btn-addBlog">
        <button type="button" class="btn btn-primary" id="addBlog">Add A Blog</button>
    </div>
</div>`
    let blogs = await fetch("http://localhost:8000/blogs")
    let result = await blogs.json()
    console.log(result)
    if (!res.isAdmin) {
        result = result.filter(ele => {
            return ele.createdBy === res._id
        })
        console.log(result)
        result.forEach(ele => {
            let card = document.createElement("div")
            card.classList.add("card", "rounded-3", "col-3", "m-2")
            card.innerHTML = `<div class="card-body" id="${ele._id}">
    <h5 class="card-title">${ele.title}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${ele.shortDescription}</h6>
    <h6>Posted By:&nbsp &nbsp${res.username}</h6>
    <button type="button" class="btn btn-primary" id="detail${ele._id}">In Detail</button>
    <button type="button" class="btn btn-primary" id="mod${ele._id}">Modify</button>
    <button type="button" class="btn btn-primary" id="del${ele._id}">Delete</button>
    </div>`
            user_blog.append(card)
            let btn_detail = document.querySelector(`#detail${ele._id}`)
            btn_detail.addEventListener("click", (event) => {
                const blogID = event.target.parentElement.id
                location.href = `http://localhost:8000/blogInDetail/${blogID}`
            })
            let btn_del = document.querySelector(`#del${ele._id}`)
            btn_del.addEventListener("click", async (event) => {
                const blogID = event.target.parentElement.id
                const pros = await fetch(`http://localhost:8000/delete/${blogID}`, { method: "DELETE" })
                event.target.parentElement.parentElement.remove()
            })
            let btn_mod = document.querySelector(`#mod${ele._id}`)
            btn_mod.addEventListener("click", (event) => {
                const blogID = event.target.parentElement.id
                location.href = `http://localhost:8000/updateBlog/${blogID}`
            })
        })
    }
    else {

        result.forEach(ele => {
            if (ele.createdBy !== res._id) {
                let card = document.createElement("div")
                card.classList.add("card", "rounded-3", "col-3", "m-2")
                card.innerHTML = `<div class="card-body" id="${ele._id}">
        <h5 class="card-title">${ele.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${ele.shortDescription}</h6>
        <h6>Posted By:&nbsp &nbsp${ele.postedBy}</h6>
        <button type="button" class="btn btn-primary" id="detail${ele._id}">In Detail</button>
       
        <button type="button" class="btn btn-primary" id="del${ele._id}">Delete</button>
        </div>`
                user_blog.append(card)
                let btn_detail = document.querySelector(`#detail${ele._id}`)
                btn_detail.addEventListener("click", (event) => {
                    const blogID = event.target.parentElement.id
                    location.href = `http://localhost:8000/blogInDetail/${blogID}`
                })
                let btn_del = document.querySelector(`#del${ele._id}`)
                btn_del.addEventListener("click", async (event) => {
                    const blogID = event.target.parentElement.id
                    const pros = await fetch(`http://localhost:8000/delete/${blogID}`, { method: "DELETE" })
                    event.target.parentElement.parentElement.remove()
                })
            }
            else {
                let card = document.createElement("div")
                card.classList.add("card", "rounded-3", "col-3", "m-2")
                card.innerHTML = `<div class="card-body" id="${ele._id}">
            <h5 class="card-title">${ele.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${ele.shortDescription}</h6>
            <h6>Posted By:&nbsp &nbsp${ele.postedBy}</h6>
            <button type="button" class="btn btn-primary" id="detail${ele._id}">In Detail</button>
            <button type="button" class="btn btn-primary" id="mod${ele._id}">Modify</button>
            <button type="button" class="btn btn-primary" id="del${ele._id}">Delete</button>
            </div>`
                user_blog.append(card)
                let btn_detail = document.querySelector(`#detail${ele._id}`)
                btn_detail.addEventListener("click", (event) => {
                    const blogID = event.target.parentElement.id
                    location.href = `http://localhost:8000/blogInDetail/${blogID}`
                })
                let btn_del = document.querySelector(`#del${ele._id}`)
                btn_del.addEventListener("click", async (event) => {
                    const blogID = event.target.parentElement.id
                    const pros = await fetch(`http://localhost:8000/delete/${blogID}`, { method: "DELETE" })
                    event.target.parentElement.parentElement.remove()
                })
                let btn_mod = document.querySelector(`#mod${ele._id}`)
                btn_mod.addEventListener("click", (event) => {
                    const blogID = event.target.parentElement.id
                    location.href = `http://localhost:8000/updateBlog/${blogID}`
                })

            }


        })
    }






    let add = document.querySelector("#addBlog")
    add.addEventListener("click", () => {
        location.href = "http://localhost:8000/blogAddingPage"
    })

})