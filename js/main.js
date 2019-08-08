
let btn = document.querySelector(".search");
let list = document.querySelector("#list");

// console.log(userValue)

btn.addEventListener("click", function() {
    
    var userValue = document.querySelector('#input').value

    console.log(userValue)
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

