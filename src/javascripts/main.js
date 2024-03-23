import "bootstrap"

import { movies } from './movies'

for(let m of movies){
    let m_thumb = document.getElementById('m' + m.id)
    m_thumb.innerHTML = `
        <img src="${m.picture}" alt="${m.title}" class="img-thumnail" style="width:180px; height:270px;" />
    `

    m_thumb.onclick = function(){
        displayMovie(m)
    }
}

let featuredMovie = document.querySelector(".featured")
function displayMovie(movie){
    featuredMovie.innerHTML = `
        <div class="card">
            <div class="card-header">${movie.title}</div>
            <img src="${movie.picture}" class="card-img-top" alt="${movie.title}">
            <div class="card-body">
                <p class="card-text">${movie.description}</p>
            </div>
        </div>
    `
}

function searchMovies(event){
    event.preventDefault()

    let input = document.querySelector('[type="search"]').value || ""
    let count = 0
    for(let m of movies){
        if(m.title.toUpperCase().indexOf(input.toUpperCase()) == -1){
            document.querySelector(`#m${m.id}`).classList.add('d-none')
        }
        else{
            document.querySelector(`#m${m.id}`).classList.remove('d-none')
            count++
        }
    }

    featuredMovie.innerHTML = count == 0 ? 'Nothing was found' : ''
}

document.querySelector("button").onclick = searchMovies
document.querySelector('[type="search"]').onsearch = searchMovies
document.querySelector("form").onsubmit = searchMovies