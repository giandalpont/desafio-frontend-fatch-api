
let btn = document.querySelector(".search");
let list = document.querySelector("#list");

let userValue = document.querySelector('input').value

btn.addEventListener("click", function() {
    fetch(`https://api.github.com/users/${userValue}`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        
        getUser(data)
        getRepositories(data)
    
    })
    .catch(error =>{
        $('.busca').addClass('error')
        console.error(error)
    })
})

