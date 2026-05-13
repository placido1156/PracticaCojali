const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", cambiarTema);

function cambiarTema() {

    document.body.classList.toggle("oscuro");

}

const estudios = [

    {
        nombre: "Primaria y ESO",
        centro: "Colegio Virgen de la Cabeza"
    },

    {
        nombre: "Bachillerato Ciencias y Tecnología",
        centro: "IES Bernardo Balbuena"
    },

    {
        nombre: "1º DAW (en proceso)",
        centro: "IES Gregorio Prieto"
    }

];

const formulario = document.getElementById("formulario-estudio");

const listaEstudios = document.getElementById("lista-estudios");

mostrarEstudios();

function mostrarEstudios() {

    listaEstudios.innerHTML = "";

    for (let estudio of estudios) {

        const div = document.createElement("div");

        div.classList.add("estudio");

        div.innerHTML = `
            <h3>${estudio.nombre}</h3>
            <p>${estudio.centro}</p>
        `;

        listaEstudios.appendChild(div);

    }

}

formulario.addEventListener("submit", agregarEstudio);

function agregarEstudio(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre-estudio").value;

    const centro = document.getElementById("centro-estudio").value;

    estudios.push({

        nombre: nombre,

        centro: centro

    });

    mostrarEstudios();

    formulario.reset();

}

const botonRepo = document.getElementById("cargar-repo");

const repo = document.getElementById("repo");

botonRepo.addEventListener("click", mostrarRepo);

function mostrarRepo() {

    repo.innerHTML = `
        <div class="repo">

            <p>PracticaCojali</p>

            <a href="https://github.com/placido1156/PracticaCojali" target="_blank">
                Abrir repositorio
            </a>

        </div>
    `;

}