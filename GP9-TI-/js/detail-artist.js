let qs = location.search;
let qsOL = new URLSearchParams(qs)
let idPJ = qsOL.get('id')
console.log(idPJ);

let endpoint = "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/" + idPJ

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        document.querySelector('.contenedorartista').innerHTML = `<a style="text-decoration:none" href="./detail-artist.html?id=${data.id}">
        <article class="ordencajas">
            <div class="artistahija2">
                <img class="artistaimg1" src=${data.picture_medium} alt="${data.name}">
            </div>
            <div class="artistanomdesc">
                <h4 class="nombrealbumartista">
               Cantidad de albums: ${data.nb_album}
                </h4>
            </div>
        </article>
    </a>`

        document.querySelector('.tituloseccionmaroonv').innerHTML = data.name
      let  urlnueva = ` https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${data.id}/albums`
    fetch(urlnueva)
    .then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
        for (let i = 0; i < 3; i++) {
            document.querySelector(".podioprimero").innerHTML += ` <a href="./detail-album.html?id=${data.data[i].id}" class="hiperresultados">
            <article class="podioprimerlugar">
                <h3 class="nombrecancionpodio">${i +1 } - ${data.data[i].title}</h3>
                <h3 class="nombredescripcionpodio fechapodio">${data.data[i].release_date}</h3>
                <img src="${data.data[i].cover_medium}" alt="${data.data[i].title}" class = "imgdiscosdetalle">
                <h3 class="nombredescripcionpodio reproduccionespodio">Cantidad de fanes: ${data.data[i].fans}</h3>
            </article>
        </a>`
        }
    }).catch(function (error) {
        console.log(error);
    })
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


