const botonTema = document.getElementById("boton-tema");

if (localStorage.getItem("tema") === "oscuro") {
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

const estudios = [

    {
        nombre: "Primaria y ESO",
        centro: "Colegio Virgen de la Cabeza"
    },

    {
        nombre: "Bachillerato de Ciencias y Tecnología",
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

formulario.addEventListener("submit", agregarEstudio);

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

function agregarEstudio(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre-estudio").value;

    const centro = document.getElementById("centro-estudio").value;

    const nuevoEstudio = {
        nombre: nombre,
        centro: centro
    };

    estudios.push(nuevoEstudio);

    mostrarEstudios();

    formulario.reset();

}