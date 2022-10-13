// Grabbing text files

document.getElementById("get-text").addEventListener("click", getText);
function getText(){
    fetch("sample.txt")
    .then((res) => res.text())
    .then((data) => {
        document.getElementById("output").innerHTML = data;
    })
    .catch((err) => console.log("Error")) 
}

// Grabbing Json files

document.getElementById("get-users").addEventListener("click", getUsers);
function getUsers(){
    fetch ('users.json')
    .then((res)=> res.json())
    .then((data)=> {
        let HTML = "<h2> Users </h2>"
        data.forEach((user)=>{
            HTML += `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `
        })
        document.getElementById("output").innerHTML = HTML
    })
}

// Grabbing API DATA

document.getElementById("get-posts").addEventListener("click", getPosts)
function getPosts(){
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then((res)=> res.json())
    .then((data)=> {
        let HTML = "<h2> Posts </h2>"
        data.forEach((post)=>{
            HTML += `
            <div>
                <h3> ${post.title} </h3>
                <p> ${post.body} </p>
            </div>
            `
        })
        document.getElementById("output").innerHTML = HTML
    })
}

// Posting

document.getElementById("add-post").addEventListener("submit", addPost)
function addPost(e){
    e.preventDefault
    let title = document.getElementById("title").value;
    let body = document.getElementById("body").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}