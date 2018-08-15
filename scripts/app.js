const form = document.querySelector('form')
form.addEventListener('submit', submitForm)

function submitForm(event) {
    event.preventDefault()
    const subreddit = event.target.querySelector('input').value
    getSubreddit(subreddit)
        .then(displayUserInfo)
}

function getSubreddit(subreddit) {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const redditAPI = `https://reddit.com/r/${subreddit}.json`
    return fetch(proxy + redditAPI)
        .then(response => response.json())
}

function displayInfo(info) {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = info
}