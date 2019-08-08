let cardUser = document.querySelector(".card");

let userImage = cardUser.querySelector('.img')
let userName = cardUser.querySelector('.user-name')
let userDados = cardUser.querySelector('.user-dados')

function getUser(user){
    
    if(user.bio)bio = `<p class="card-text user-bio">${user.bio}</p>`
    bio =  ''
    if(user.email) mail = `<li class="list-group-item ">Repositories: ${user.public_repos}</li>`
    mail =  'Não tem email'

    userImage.innerHTML = `<img src="${user.avatar_url}&s=300" class="img-fluid" alt="${user.name}"/>`;

    userName.innerHTML = ` <h5 class="card-title ">${user.name}</h5> ${bio} `

    userDados.innerHTML = `
        <li class="list-group-item ">followers: ${user.followers}</li>
        <li class="list-group-item ">following: ${user.following}</li>
        <li class="list-group-item ">Repositories: ${mail}</li>
        <li class="list-group-item ">Email: ${user.email}</li>
    ` 
}

