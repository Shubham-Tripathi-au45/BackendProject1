let footer = document.querySelector(".footer")
let healthBlogs = document.querySelector(".health-blogs")
let intro = document.querySelector(".mid-section") 
let pages = document.querySelector("#pages")
document.addEventListener("DOMContentLoaded", async() => {
    footer.classList.add("dynamic-footer")
    let pro = await fetch("http://localhost:8000/user")
    let res = await pro.json()
    if(res.isAdmin){intro.innerHTML = `<h2 class="head2">Hii Admin ${res.name} Welcome see our health blogs And delete them from profile section
    if they are inappropriate</h2>`}
    else{intro.innerHTML=`<h2 class="head2">Hii ${res.name} Welcome see our health blogs</h2>`}
    let blogs = await fetch("http://localhost:8000/blogs")
    let result = await blogs.json()
    
    //part of pagination
    // let len = result.length
    //let blog_len = Math.floor(len/10)
    //
    result.forEach(ele=>{
        let card = document.createElement("div")
        card.classList.add("card", "rounded-3","col-3","m-2")
        card.innerHTML = `<div class="card-body" id="${ele._id}">
        <h5 class="card-title">${ele.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${ele.shortDescription}</h6>
        <h6>Posted By:&nbsp &nbsp${ele.postedBy}</h6>
        <button type="button" class="btn btn-primary" id="detail${ele._id}">In Detail</button>
        </div>`
        healthBlogs.append(card)
        let btn_detail = document.querySelector(`#detail${ele._id}`)
        btn_detail.addEventListener("click",(event)=>{
            const blogID = event.target.parentElement.id
            location.href = `http://localhost:8000/blogInDetail/${blogID}`
        })
        
        
    })
    //experimenting for pagenation
    // for(let i=1;i<blog_len;i++){
    //     let list = document.createElement("li")
    //     list.classList.add("page-item")
    //     list.innerHTML = `<a class="page-link" href="http://localhost:8000/blogs?page=${i}&size=10">${i}</a>`
    //     pages.append(list)
        
    // }

})

