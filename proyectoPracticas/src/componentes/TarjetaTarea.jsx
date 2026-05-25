function TarjetaTarea({
  tarea,
  eliminarTarea,
  completarTarea,
  setTareaEditando
}) {

  return (

    <div
      className={
        tarea.estado === "Completada"
          ? "tarjeta completada"
          : "tarjeta"
      }
    >

      <h3>{tarea.titulo}</h3>

      <p>
        {tarea.descripcion}
      </p>

      <p>
        Prioridad:
        <span className={tarea.prioridad}>
          {" "}{tarea.prioridad}
        </span>
      </p>

      <p>
        Estado: {tarea.estado}
      </p>

      <p>
        Fecha límite:
        {" "}
        {tarea.fechaLimite || "Sin fecha"}
      </p>

      <button
        onClick={() =>
          setTareaEditando(tarea)
        }
      >
        Editar
      </button>

      <button
        onClick={() =>
          eliminarTarea(tarea.id)
        }
      >
        Eliminar
      </button>

      <button
        onClick={() =>
          completarTarea(tarea.id)
        }
      >
        Completar
      </button>

    </div>

  );

}

export default TarjetaTarea;