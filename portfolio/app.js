const botonTema = document.getElementById("boton-tema");

if (localStorage.getItem("tema") == "oscuro") {

    document.body.classList.add("oscuro");

}

botonTema.addEventListener("click", cambiarTema);

function cambiarTema() {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {

        localStorage.setItem("tema", "oscuro");

    } else {

        localStorage.setItem("tema", "claro");

    }

}

let estudios = JSON.parse(localStorage.getItem("estudios"));

if (estudios == null) {

    estudios = [

        {
            nombre: "Primaria y ESO",
            centro: "Colegio Virgen de la Cabeza"
        },

        {
            nombre: "Bachillerato Ciencias y Tecnología",
            centro: "IES Bernardo Balbuena"
        },

        {
            nombre: "1º DAW",
            centro: "IES Gregorio Prieto"
        }

    ];

}

const formulario = document.getElementById("formulario-estudio");

const listaEstudios = document.getElementById("lista-estudios");

mostrarEstudios();

formulario.addEventListener("submit", agregarEstudio);

function mostrarEstudios() {

    listaEstudios.innerHTML = "";

    for (let i = 0; i < estudios.length; i++) {

        const estudio = estudios[i];

        const div = document.createElement("div");

        div.classList.add("estudio");

        div.innerHTML = `
            <h3>${estudio.nombre}</h3>

            <p>${estudio.centro}</p>

            <button onclick="eliminarEstudio(${i})">
                Eliminar
            </button>
        `;

        listaEstudios.appendChild(div);

    }

}

function agregarEstudio(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre-estudio").value;

    const centro = document.getElementById("centro-estudio").value;

    estudios.push({

        nombre: nombre,

        centro: centro

    });

    guardarDatos();

    mostrarEstudios();

    formulario.reset();

}

function eliminarEstudio(indice) {

    estudios.splice(indice, 1);

    guardarDatos();

    mostrarEstudios();

}

function guardarDatos() {

    localStorage.setItem("estudios", JSON.stringify(estudios));

}

/* GITHUB API */

const botonGithub = document.getElementById("buscar-github");

const perfilGithub = document.getElementById("perfil-github");

const repositorios = document.getElementById("repositorios");

botonGithub.addEventListener("click", buscarGithub);

function buscarGithub() {

    const usuario = document.getElementById("usuario-github").value;

    perfilGithub.innerHTML = "";

    repositorios.innerHTML = "";

    fetch("https://api.github.com/users/" + usuario)

    .then(function(respuesta) {

        return respuesta.json();

    })

    .then(function(datos) {

        perfilGithub.innerHTML = `
            <div class="estudio">

                <h3>${datos.login}</h3>

                <p>Repositorios públicos: ${datos.public_repos}</p>

                <a href="${datos.html_url}" target="_blank">
                    Ver perfil
                </a>

            </div>
        `;

    });

    fetch("https://api.github.com/users/" + usuario + "/repos")

    .then(function(respuesta) {

        return respuesta.json();

    })

    .then(function(datos) {

        for (let i = 0; i < datos.length; i++) {

            const repo = datos[i];

            const div = document.createElement("div");

            div.classList.add("estudio");

            div.innerHTML = `
                <h3>${repo.name}</h3>

                <a href="${repo.html_url}" target="_blank">
                    Ver repositorio
                </a>
            `;

            repositorios.appendChild(div);

        }

    });

}