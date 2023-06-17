let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/album/" + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector(".discosdetallepadre").innerHTML = `<img src=${data.cover_medium} alt="${data.title}" class="imgdiscosdetalle2">
        <h1 class="nombrediscodetalle">Disco: ${data.title}</h1>
        <a href="./detail-artist.html?id=${data.artist.id}" class="hiperdisco">
            <h2>${data.artist.name}</h2>
        </a>
        <a href="./detail-genres.html?id=${data.genres.data[0].id}" class="hiperdisco">
            <h3>Genero de musica: ${data.genres.data[0].name}</h3>
        </a>
        <h3>Fecha: ${data.release_date}</h3>
        <h2>Canciones del disco:</h2>`
        
    })
    .catch(function (error) {
        console.log(error);
    })



    fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        for (let i = 0; i < 5; i++) {
            document.querySelector(".contenedoracancionesdisco").innerHTML += `
            <a href="./detail-track.html?id=${data.tracks.data[i].id}" class="hiperdisco">
                <article class="hijacancionesdisco">
                    <img src="${data.cover_medium}" alt="${data.tracks.data[i].title_short}" class="imgcanciondisco">
                    <h3 class="nombrecanciondiscodetalle">${data.tracks.data[i].title_short}</h3>
                </article>`
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })
    
    let buscador = document.querySelector('.buscador')
let campoBuscar = document.querySelector('#busqueda')

buscador.addEventListener('submit', function (e) {
    e.preventDefault()
    if (campoBuscar.value.length == 0 ) {
        alert("No puedes enviar el formulario vacio!")
    } else if (campoBuscar.value.length < 3 ) {
        alert("El termino buscado debe tener mas de 3 letras")
    } else {
        this.submit();
    }
});


