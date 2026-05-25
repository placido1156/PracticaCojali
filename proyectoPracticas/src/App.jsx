import { useState, useEffect } from "react";

import Cabecera from "./componentes/Cabecera";
import FormularioTarea from "./componentes/FormularioTarea";
import BarraFiltros from "./componentes/BarraFiltros";
import ListaTareas from "./componentes/ListaTareas";

function App() {

  const [tareas, setTareas] = useState([]);

  const [tareaEditando, setTareaEditando] = useState(null);

  const [filtroEstado, setFiltroEstado] = useState("Todas");

  const [filtroPrioridad, setFiltroPrioridad] = useState("Todas");

  const [orden, setOrden] = useState("recientes");

  useEffect(() => {

    const datosGuardados =
      JSON.parse(localStorage.getItem("tareas"));

    if (datosGuardados) {

      setTareas(datosGuardados);

    }

  }, []);

  useEffect(() => {

    localStorage.setItem(
      "tareas",
      JSON.stringify(tareas)
    );

  }, [tareas]);

  function agregarTarea(tareaNueva) {

    if (tareaEditando) {

      const nuevasTareas = tareas.map((tarea) =>
        tarea.id === tareaEditando.id
          ? tareaNueva
          : tarea
      );

      setTareas(nuevasTareas);

      setTareaEditando(null);

      alert("Tarea editada");

    } else {

      setTareas([
        ...tareas,
        {
          ...tareaNueva,
          id: Date.now(),
          fechaCreacion: new Date()
        }
      ]);

      alert("Tarea creada");

    }

  }

  function eliminarTarea(id) {

    const confirmar = confirm(
      "¿Seguro que quieres eliminar la tarea?"
    );

    if (confirmar) {

      const nuevasTareas =
        tareas.filter((tarea) => tarea.id !== id);

      setTareas(nuevasTareas);

      alert("Tarea eliminada");

    }

  }

  function completarTarea(id) {

    const nuevasTareas = tareas.map((tarea) => {

      if (tarea.id === id) {

        return {
          ...tarea,
          estado: "Completada"
        };

      }

      return tarea;

    });

    setTareas(nuevasTareas);

  }

  let tareasFiltradas = [...tareas];

  if (filtroEstado !== "Todas") {

    tareasFiltradas = tareasFiltradas.filter(
      (tarea) => tarea.estado === filtroEstado
    );

  }

  if (filtroPrioridad !== "Todas") {

    tareasFiltradas = tareasFiltradas.filter(
      (tarea) => tarea.prioridad === filtroPrioridad
    );

  }

  if (orden === "titulo") {

    tareasFiltradas.sort((a, b) =>
      a.titulo.localeCompare(b.titulo)
    );

  }

  if (orden === "fecha") {

    tareasFiltradas.sort((a, b) =>
      new Date(a.fechaLimite) -
      new Date(b.fechaLimite)
    );

  }

  return (

    <div>

      <Cabecera />

      <FormularioTarea
        agregarTarea={agregarTarea}
        tareaEditando={tareaEditando}
      />

      <BarraFiltros
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
        filtroPrioridad={filtroPrioridad}
        setFiltroPrioridad={setFiltroPrioridad}
        orden={orden}
        setOrden={setOrden}
      />

      <p className="contador">
        Total tareas: {tareasFiltradas.length}
      </p>

      <ListaTareas
        tareas={tareasFiltradas}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
        setTareaEditando={setTareaEditando}
      />

    </div>

  );

}

export default App;