const botonTema = document.getElementById("boton-tema");

if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("oscuro");
}

botonTema.addEventListener("click", function () {

    document.body.classList.toggle("oscuro");

    if (document.body.classList.contains("oscuro")) {
        localStorage.setItem("tema", "oscuro");
    } else {
        localStorage.setItem("tema", "claro");
    }

});