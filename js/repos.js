let repos = document.querySelector('#repos')
let listRepos = repos.querySelector('.repos-list')

function getRepositories(data){
    fetch(`https://api.github.com/users/${userValue}/repos`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var output
        data.forEach(function(rep){
            if(rep.name){
                output  += `<li class="list-group-item">${rep.name}</li>`
            }
        })
        listRepos.innerHTML = output
    
    })
    .catch(error =>{
        $('.busca').addClass('error')
        console.error(error)
    })
    
}