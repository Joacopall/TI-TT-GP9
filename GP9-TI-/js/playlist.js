let recuperoStorage = localStorage.getItem(`favoritos`)
let favoritos = JSON.parse(recuperoStorage)
console.log(favoritos);

let section = document.querySelector('.cancionesplaylistpadre')

if (favoritos == null  || favoritos.length == 0) {
    section.innerHTML = `<h1>No hay favoritos!!!</h1>`
} else {
    for (let i = 0; i < favoritos.length; i++) {
        
        let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}` 
        fetch(url).then(function (response) {
            return response.json()
        }).then (function (data) {
            console.log(data);
            section.innerHTML += `
            <div class="hiperplaylist">
                        <div class="cancionesplaylisthija"> 
                        <a href="./detail-track.html?id=${data.id}">
                            <img src="${data.album.cover_medium}" alt="parachutes" class="imagencancionplaylist">
                            </a>
                            <h3 class="nombrecancionplaylist">${data.title}</h3>
                            <iframe src="${data.preview}" class="playlistplay" frameborder="0"></iframe>
                        </div>
                    </div>
            `;
        }).catch(function(e){
        console.log(e);}
        )}
};


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
