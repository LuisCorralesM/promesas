 const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const RickAndMorty = 'https://rickandmortyapi.com/api/character'

const
form = document.querySelector('#form'),
main = document.querySelector('#main'),
search = document.querySelector('#search'),
template = document.querySelector('#template-card').content,
fragment = document.createDocumentFragment()

const  getPersonajes = (url)=>{
return fetch(url)
    .then(response => response.json())
    .then(json => {printData(json)})
    .catch(error => console.error('Error: ', Error))
}

getPersonajes(RickAndMorty)

const printData = (data)=>{
    data.results.forEach(personaje => {
        const
        {image, name, gender, species} = personaje
        template.querySelector('img').setAttribute('src', image)
        template.querySelector('h5').textContent = name
        template.querySelector('#texto1').textContent = gender
        template.querySelector('#texto2').textContent = species

        const clon = template.cloneNode(true)
        fragment.appendChild(clon)
    });
    main.appendChild(fragment)
}

