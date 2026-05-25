import { useState, useEffect } from "react";

function FormularioTarea({
  agregarTarea,
  tareaEditando
}) {

  const [titulo, setTitulo] = useState("");

  const [descripcion, setDescripcion] =
    useState("");

  const [prioridad, setPrioridad] =
    useState("Media");

  const [estado, setEstado] =
    useState("Pendiente");

  const [fechaLimite, setFechaLimite] =
    useState("");

  useEffect(() => {

    if (tareaEditando) {

      setTitulo(tareaEditando.titulo);

      setDescripcion(
        tareaEditando.descripcion
      );

      setPrioridad(
        tareaEditando.prioridad
      );

      setEstado(
        tareaEditando.estado
      );

      setFechaLimite(
        tareaEditando.fechaLimite
      );

    }

  }, [tareaEditando]);

  function enviarFormulario(e) {

    e.preventDefault();

    if (
      titulo.trim() === "" ||
      titulo.length > 100
    ) {

      alert("Título incorrecto");

      return;

    }

    if (descripcion.length > 500) {

      alert("Descripción demasiado larga");

      return;

    }

    agregarTarea({
      id: tareaEditando
        ? tareaEditando.id
        : null,
      titulo,
      descripcion,
      prioridad,
      estado,
      fechaLimite
    });

    setTitulo("");
    setDescripcion("");
    setPrioridad("Media");
    setEstado("Pendiente");
    setFechaLimite("");

  }

  return (

    <section>

      <h2>
        {tareaEditando
          ? "Editar tarea"
          : "Crear tarea"}
      </h2>

      <form onSubmit={enviarFormulario}>

        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) =>
            setTitulo(e.target.value)
          }
        />

        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) =>
            setDescripcion(e.target.value)
          }
        ></textarea>

        <select
          value={prioridad}
          onChange={(e) =>
            setPrioridad(e.target.value)
          }
        >
          <option>Alta</option>
          <option>Media</option>
          <option>Baja</option>
        </select>

        <select
          value={estado}
          onChange={(e) =>
            setEstado(e.target.value)
          }
        >
          <option>Pendiente</option>
          <option>En Progreso</option>
          <option>Completada</option>
        </select>

        <input
          type="date"
          value={fechaLimite}
          onChange={(e) =>
            setFechaLimite(e.target.value)
          }
        />

        <button>
          {tareaEditando
            ? "Guardar cambios"
            : "Crear tarea"}
        </button>

      </form>

    </section>

  );

}

export default FormularioTarea;