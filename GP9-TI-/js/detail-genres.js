let qs = location.search;
let qsOL = new URLSearchParams(qs) 
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/" + idPJ
let endpoint2 ="https://api.allorigins.win/raw?url=https://api.deezer.com/genre/" + idPJ

fetch(endpoint)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
    for (let i = 0; i < 10; i++) {
        document.querySelector('.contenedorgenerolista').innerHTML += `<a href="./detail-artist.html?id=${data.artists.data[i].id}" class="hipergenero">
        <div class="listagenerohija">
            <img class="artistaimg" src="${data.artists.data[i].picture_small}" alt="${data.artists.data[i].name}">
            <h3 class="nombredgeneroartista">
            ${data.artists.data[i].name}
            </h3>
        </div>
    </a>`
        
    }
    
})
.catch(function (error) {
    console.log(error);
});

fetch(endpoint2)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
    document.querySelector('.contenedordgenero').innerHTML = `<div class="dgenerohija">
    <h2>Genero: ${data.name}</h2>
    <img src="${data.picture_medium}" alt="${data.name}" class="imggeneroelegido">
</div>`
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


