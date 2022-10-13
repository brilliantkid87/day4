let dataBlog = []

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById("input-projectname").value
    let description = document.getElementById("input-description").value
    let technologies = document.getElementById("technologies").value
    let image = document.getElementById("input-blog-image").files
    console.log(image);

    image = URL.createObjectURL(image[0])
    console.log(image);

    let blog = {
        title,
        description,
        image,
        technologies
    }
    
    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog()

}

function renderBlog() {
    // perulangan

    document.getElementById("contents").innerHTML = ""

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);        

        document.getElementById("contents").innerHTML += `
            <div class="card">
            <img src="${dataBlog[index].image}" width="100%" alt="">
            <h5>${dataBlog[index].title}</h5>
            <p>Duration : 5 Month</p>
            <p class="p-content">${dataBlog[index].description}</p>
            <i class="${dataBlog[index].technologies}"></i>
            <div class="buttons">
                <div class="input-btn">
                    <button class="action_btn">Save</button>
                    <button class="action_btn">Cancel</button>
                </div>
            </div>
        </div>
        `

    }
}