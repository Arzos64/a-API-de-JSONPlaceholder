
//promeza que trae los datos de la api y los manda a la funcion done
function obtenerDatos(done) {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => done(data))
        .catch(error => console.log("error a la hora de obtener los datos" + error));
};


// event listener que llama a la funcion obtenerDatos y le manda la funcion done

//funcion que recibe los datos de la api y los muestra en el html
document.querySelector('.enviar').addEventListener('click', () => {
    //data pasa a tener los datos del done
    obtenerDatos((data) => {
        //selecciona el main y lo vacia
        const principal = document.querySelector('main');
        principal.innerHTML = '';
        //recorre el array de datos y por cada elemento crea un div con la info del elemento y lo insert
        data.forEach(element => {
          let  personaje = document.createRange().createContextualFragment(`
                    <div class="card">
                    <h2 class="count">#${element.id}</h2>
                    <img src="${element.url}"  class="card-img">
                    <h2 class="card-title">Tittle:${element.title}</h2>
                    <p class="paragrap">Url of thumb:${element.thumbnailUrl}</p>
                    <p class="id">Number album${element.albumId}</p>
                    </div>
                     `);
                     //inserta el div en el main
                     principal.appendChild(personaje);
        })
    })
});







// const principal = document.querySelector('header');
// principal.innerHTML = '';
// personaje = document.createRange().createContextualFragment(`
//     <div class="card">
//         <img src="${personaje.image}" alt="${personaje.name}" class="card-img">
//         <div class="card-content">
//             <h2 class="card-title">${personaje.name}</h2>
//             <br>
//             <p class="card-status">Estado: ${personaje.status}</p>
//             <br>
//             <p class="card-species">Especie: ${personaje.species}</p>
//             <br>
//             <p class="card-gender">Created: ${personaje.created}</p>
//             <br>
//             <p class="card-gender">Gender: ${personaje.gender}</p>
//         </div>
//     </div>
// `);
// principal.append(personaje);