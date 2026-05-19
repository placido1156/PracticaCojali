import { useState, useEffect } from "react";
import "./App.css";

function App() {

  /* TEMA */

  const [temaOscuro, setTemaOscuro] = useState(false);

  useEffect(() => {

    if (localStorage.getItem("tema") === "oscuro") {

      setTemaOscuro(true);

    }

  }, []);

  function cambiarTema() {

    const nuevoTema = !temaOscuro;

    setTemaOscuro(nuevoTema);

    if (nuevoTema) {

      localStorage.setItem("tema", "oscuro");

    } else {

      localStorage.setItem("tema", "claro");

    }

  }

  /* ESTUDIOS */

  const [estudios, setEstudios] = useState(() => {

    const datosGuardados = localStorage.getItem("estudios");

    if (datosGuardados) {

      return JSON.parse(datosGuardados);

    }

    return [

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

  });

  const [nombreEstudio, setNombreEstudio] = useState("");

  const [centroEstudio, setCentroEstudio] = useState("");

  useEffect(() => {

    localStorage.setItem(
      "estudios",
      JSON.stringify(estudios)
    );

  }, [estudios]);

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

  /* GITHUB API */

  const [usuarioGithub, setUsuarioGithub] = useState("");

  const [perfilGithub, setPerfilGithub] = useState(null);

  const [repositorios, setRepositorios] = useState([]);

  function buscarGithub() {

    setPerfilGithub(null);

    setRepositorios([]);

    fetch("https://api.github.com/users/" + usuarioGithub)

      .then(function(respuesta) {

        return respuesta.json();

      })

      .then(function(datos) {

        setPerfilGithub(datos);

      });

    fetch("https://api.github.com/users/" + usuarioGithub + "/repos")

      .then(function(respuesta) {

        return respuesta.json();

      })

      .then(function(datos) {

        setRepositorios(datos);

      });

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

        <a href="#github">GitHub</a>

        <a href="#contacto">Contacto</a>

      </nav>

      <main>

        <section id="sobre-mi">

          <h2>Sobre mí</h2>

          <p>
            Hola, me llamo Plácido Chinchilla,
            tengo 20 años y estudio
            primero de DAW en el Gregorio Prieto.
          </p>

        </section>

        <section id="habilidades">

          <h2>Habilidades</h2>

          <ul>

            <li>HTML</li>

            <li>CSS básico</li>

            <li>JavaScript básico</li>

            <li>React básico</li>

          </ul>

        </section>

        <section id="estudios">

          <h2>Estudios</h2>

          <form onSubmit={agregarEstudio}>

            <label>Nombre del estudio</label>

            <input
              type="text"
              value={nombreEstudio}
              onChange={(e) =>
                setNombreEstudio(e.target.value)
              }
            />

            <label>Centro</label>

            <input
              type="text"
              value={centroEstudio}
              onChange={(e) =>
                setCentroEstudio(e.target.value)
              }
            />

            <input
              type="submit"
              value="Agregar"
            />

          </form>

          {estudios.map((estudio, i) => (

            <div className="estudio" key={i}>

              <h3>{estudio.nombre}</h3>

              <p>{estudio.centro}</p>

              <button
                onClick={() => eliminarEstudio(i)}
              >
                Eliminar
              </button>

            </div>

          ))}

        </section>

        <section id="github">

          <h2>Buscar GitHub</h2>

          <input
            type="text"
            placeholder="Usuario de GitHub"
            value={usuarioGithub}
            onChange={(e) =>
              setUsuarioGithub(e.target.value)
            }
          />

          <button onClick={buscarGithub}>
            Buscar
          </button>

          {perfilGithub && (

            <div className="perfil">

              <h3>{perfilGithub.login}</h3>

              <p>
                Repositorios públicos:
                {" "}
                {perfilGithub.public_repos}
              </p>

              <a
                href={perfilGithub.html_url}
                target="_blank"
              >
                Ver perfil
              </a>

            </div>

          )}

          {repositorios.map((repo) => (

            <div className="repo" key={repo.id}>

              <h3>{repo.name}</h3>

              <a
                href={repo.html_url}
                target="_blank"
              >
                Ver repositorio
              </a>

            </div>

          ))}

        </section>

        <section id="contacto">

          <h2>Contacto</h2>

          <p>Email: placido1156@gmail.com</p>

          <p>Teléfono: 680410838</p>

        </section>

      </main>

      <footer>

        <p>© 2026 Plácido Chinchilla</p>

        <a
          href="https://github.com/placido1156/PracticaCojali"
          target="_blank"
        >
          GitHub
        </a>

      </footer>

    </div>

  );

}

export default App;