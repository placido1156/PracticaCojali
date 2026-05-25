import TarjetaTarea from "./TarjetaTarea";

function ListaTareas({
  tareas,
  eliminarTarea,
  completarTarea,
  setTareaEditando
}) {

  return (

    <section className="lista-tareas">

      {tareas.map((tarea) => (

        <TarjetaTarea
          key={tarea.id}
          tarea={tarea}
          eliminarTarea={eliminarTarea}
          completarTarea={completarTarea}
          setTareaEditando={setTareaEditando}
        />

      ))}

    </section>

  );

}

export default ListaTareas;