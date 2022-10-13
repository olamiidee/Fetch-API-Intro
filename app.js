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