
document.addEventListener("DOMContentLoaded", async () => {
    let titled = document.querySelector("#title")
    let shortDesc = document.querySelector("#shortDescription")
    let contents = document.querySelector("#content")
    let change = document.querySelector("#changes")
    bl_id = location.href.split("/")[location.href.split("/").length - 1]

    console.log(bl_id)
    let pro = await fetch(`http://localhost:8000/blogs/${bl_id}`)
    let res = await pro.json()
    titled.value = res.title
    shortDesc.value = res.shortDescription
    contents.value = res.content

    change.addEventListener("click", async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: titled.value, shortDescription: shortDesc.value, content: contents.value })
        };
        
        const response = await fetch(`http://localhost:8000/update/${bl_id}`, requestOptions);
        // const result = await response.json()
        console.log(response)
        console.log("updated blog")
        location.href="http://localhost:8000/profile"
        
        // console.log("hello ffrom save")
        // location.reload()
        // element.innerHTML = data.updatedAt;
    })
})  
