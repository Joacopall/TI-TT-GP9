let qs = location.search
let qsOL = new URLSearchParams(qs)

let valor = qsOL.get("buscar")
console.log(valor);
let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${valor}`;

let section = document.querySelector(`articlesearch`)

    fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        document.querySelector(`.cajasearch`).innerHTML += `<h3 class="titulosearch">
        Termino buscado : "${valor}"
    </h3>
    <h3 class="titulosearch">
        Resultados que coinciden:
    </h3>`
    if (data.data.length == 0   ) {
        let etiqueta1 = document.querySelector('.cajasearch')
        let etiqueta2 = document.querySelector('.cajasearch3')
        etiqueta1.style.display = "none"
        etiqueta2.style.display = "none"
    } else{
        for (let i = 0; i < 5; i++) {
            document.querySelector(`.articlesearch`).innerHTML +=  `<div>
              <a href="./detail-track.html?id=${data.data[i].id}" class="hiperindex">
                  <div class="cancionhijasearch">
                      <img class="cancionimgsearch" src="${data.data[i].album.cover_medium}" alt="Music of the spheres">
                      <h3 class="nombreartistasearch">
                      ${data.data[i].title}
                      </h3>
                      <h4 class="nombrealbumsearch">
                      ${data.data[i].artist.name}
                      </h4>
                  </div>
              </a>
              </div>`
              document.querySelector('.cajasearch2').style.display = "none"
    }

   
    }})
    .catch(function(error){
        console.log(error);
    });
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

    let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/artist?q=${valor}`
    fetch(urlArtistas)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.data.length);
        if (data.data.length == 0) {
            document.querySelector('.cajasearch4').style.display = "none"
        } else{
        for (let i = 0; i < 5; i++) {
            document.querySelector(`.articlesearch2`).innerHTML +=  `<div>
              <a href="./detail-artist.html?id=${data.data[i].id}" class="hiperindex">
                  <div class="cancionhijasearch">
                      <img class="cancionimgsearch" src="${data.data[i].picture_medium}" alt="${data.data[i].name}">
                      <h3 class="nombreartistasearch">
                      ${data.data[i].name}
                      </h3>
                      <h4 class="nombrealbumsearch">
                        Cantidad de albums: ${data.data[i].nb_album}
                      </h4>
                  </div>
              </a>
              </div>`
    }}})
    .catch(function(error){
        console.log(error)
    })

    let urlDiscos = `https://api.allorigins.win/raw?url=https://api.deezer.com/search/album?q=${valor}`
    fetch(urlDiscos)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        if (data.data.length == 0) {
            document.querySelector('.cajasearch5').style.display = "none"
        } else{
        for (let i = 0; i < 5; i++) {
            document.querySelector(`.articlesearch3`).innerHTML +=  `<div>
              <a href="./detail-album.html?id=${data.data[i].id}" class="hiperindex">
                  <div class="cancionhijasearch">
                      <img class="cancionimgsearch" src="${data.data[i].cover_medium}" alt=" ${data.data[i].title}">
                      <h3 class="nombreartistasearch">
                      ${data.data[i].title}
                      </h3>
                      <h4 class="nombrealbumsearch">
                        Artista: ${data.data[i].artist.name}
                      </h4>
                  </div>
              </a>
              </div>`
    }}})
    .catch(function(error){
        console.log(error)
    })
