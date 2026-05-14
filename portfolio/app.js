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