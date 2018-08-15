const form = document.querySelector('form')
form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
    const username = event.target.querySelector('input').value
    getUser(username)
        .then(displayUserInfo)
}

function getUser(username) {
    const githubAPI = 'https://api.github.com/users/'
    return fetch(githubAPI + username)
        .then(response => response.json())
}

function displayInfo(info) {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = info
}