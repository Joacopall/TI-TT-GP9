let qs = location.search;
let qsOL= new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/track/" + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.querySelector('.articulocancionhija').innerHTML += `<h1 class="titulocanciondetalle">
        ${data.title}
    </h1>
    <div class="iframespotify">
    <img src="${data.album.cover_medium}" alt="${data.title}" class = "imgdetailtrack">
    <iframe src=${data.preview}
        frameborder="0" allowtransparency="true" allow="encrypted-media" class="iframe"></iframe>
        </div>
    
    <a href="./playlist.html" class="verplaylist">
                        <p>Ir a Playlist</p> 
                    </a>
    <a href="./detail-artist.html?id=${data.artist.id}" class="hiperresultados">
        <h4 class="nombrebandacancion">
            ${data.artist.name}
        </h4>
    </a>
    <a href="./detail-album.html?id=${data.album.id}" class="hiperresultados">
        <h5 class="detallecanciondisco">
            Disco:  ${data.album.title}
        </h5>
    </a>`
    ;
       })
    .catch(function(error){
        console.log(error);
    })

    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos')

    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
    }
    let cor = document.querySelector(`.corazon`)
    let fav = document.querySelector('.fav');
    if (favoritos.includes(idPJ)) {
        fav.innerText = "Quitar de favoritos"
        cor.innerHTML = `<i class="fa-solid fa-heart"></i>`
    };
    
    fav.addEventListener('click', function (e) {
        e.preventDefault();
        if (favoritos.includes(idPJ)) {
            let indice = favoritos.indexOf(idPJ);
            favoritos.splice(indice, 1);
            fav.innerText = "Agregar a favoritos";
            cor.innerHTML = `<i class="fa-regular fa-heart"></i>`
        } else {
            favoritos.push(idPJ);
            fav.innerText = "Quitar de favoritos";
            cor.innerHTML = `<i class="fa-solid fa-heart"></i>`;
        }
    
    
        let favToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favToString);
    });


    let buscador = document.querySelector('.buscador');
    let campoBuscar = document.querySelector('#busqueda');
    
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
    