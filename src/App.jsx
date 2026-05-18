import { useState } from "react";
import "./App.css";

function App() {

  const [temaOscuro, setTemaOscuro] = useState(false);

  const [mostrarContacto, setMostrarContacto] = useState(true);

  const [nombreEstudio, setNombreEstudio] = useState("");

  const [centroEstudio, setCentroEstudio] = useState("");

  const [estudios, setEstudios] = useState([
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
  ]);

  function cambiarTema() {
    setTemaOscuro(!temaOscuro);
  }

  function agregarEstudio(e) {
    e.preventDefault();

    const nuevo = {
      nombre: nombreEstudio,
      centro: centroEstudio
    };

    setEstudios([...estudios, nuevo]);

    setNombreEstudio("");
    setCentroEstudio("");
  }

  function eliminarEstudio(indice) {
    const copia = [...estudios];
    copia.splice(indice, 1);
    setEstudios(copia);
  }

  return (
    <div className={temaOscuro ? "oscuro" : ""}>

      <header>
        <h1>Plácido Chinchilla</h1>

        <button onClick={cambiarTema}>
          Cambiar tema
        </button>
      </header>

      <nav>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#estudios">Estudios</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <main>

        <section id="sobre-mi">
          <h2>Sobre mí</h2>

          <p>
            Hola, me llamo Plácido Chinchilla,
            tengo 20 años y estudio primero
            de DAW en el Gregorio Prieto.
          </p>
        </section>

        <section id="habilidades">
          <h2>Habilidades</h2>

          <ul>
            <li>HTML</li>
            <li>CSS básico</li>
            <li>JavaScript básico</li>
          </ul>
        </section>

        <section id="estudios">
          <h2>Estudios</h2>

          <form onSubmit={agregarEstudio}>

            <label>Nombre del estudio</label>

            <input
              value={nombreEstudio}
              onChange={(e) => setNombreEstudio(e.target.value)}
            />

            <label>Centro</label>

            <input
              value={centroEstudio}
              onChange={(e) => setCentroEstudio(e.target.value)}
            />

            <button>
              Agregar
            </button>

          </form>

          {estudios.map((estudio, i) => (
            <div className="estudio" key={i}>

              <h3>{estudio.nombre}</h3>

              <p>{estudio.centro}</p>

              <button onClick={() => eliminarEstudio(i)}>
                Eliminar
              </button>

            </div>
          ))}

        </section>

        <section id="contacto">
          <h2>Contacto</h2>

          <button
            onClick={() =>
              setMostrarContacto(!mostrarContacto)
            }
          >
            Mostrar / ocultar
          </button>

          {mostrarContacto && (
            <div>
              <p>Email: placido1156@gmail.com</p>
              <p>Teléfono: 680410838</p>
            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default App;