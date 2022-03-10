const URL = 'http://localhost:3000/films/1'
const moviePoster = document.getElementById('poster')
const movieTitle = document.getElementById('title')
const movieShowtime = document.getElementById('showtime')
const movieRuntime = document.getElementById('runtime')
const movieDescription = document.getElementById('film-info')
const ticketNum = document.getElementById('ticket-num')
const convertedCapacity = parseInt(films.capacity, 10)

fetch(URL)
    .then(resp => resp.json())
    .then(renderMovieDetails)

function renderMovieDetails(data) {
    moviePoster.src = data.poster
    movieTitle.textContent = data.title
    movieShowtime.textContent = data.showtime
    movieRuntime.textContent = data.runtime
    movieDescription.textContent = data.description
    ticketNum.innerText = convertedCapacity - films.tickets_sold
}

const URL_2 = 'http://localhost:3000/films'

fetch(URL_2)
    .then(resp => resp.json())
    .then(renderSideMenu)

function renderSideMenu() {
    
}