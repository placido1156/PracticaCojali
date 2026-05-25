function BarraFiltros({
  filtroEstado,
  setFiltroEstado,
  filtroPrioridad,
  setFiltroPrioridad,
  orden,
  setOrden
}) {

  return (

    <section>

      <h2>Filtros</h2>

      <select
        value={filtroEstado}
        onChange={(e) =>
          setFiltroEstado(e.target.value)
        }
      >
        <option>Todas</option>
        <option>Pendiente</option>
        <option>En Progreso</option>
        <option>Completada</option>
      </select>

      <select
        value={filtroPrioridad}
        onChange={(e) =>
          setFiltroPrioridad(e.target.value)
        }
      >
        <option>Todas</option>
        <option>Alta</option>
        <option>Media</option>
        <option>Baja</option>
      </select>

      <select
        value={orden}
        onChange={(e) =>
          setOrden(e.target.value)
        }
      >
        <option value="recientes">
          Más recientes
        </option>

        <option value="titulo">
          Título A-Z
        </option>

        <option value="fecha">
          Fecha límite
        </option>
      </select>

    </section>

  );

}

export default BarraFiltros;