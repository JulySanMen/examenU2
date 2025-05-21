import React from 'react'

const Filtros = ({onFilter}) => {
  const [genero,setGenero] = useState('');

  const manejarCambio = (e) => {
    setGenero(e.target.value);
    onFilter(e.target.value);
  };
  return (
    <div>
      <label htmlFor="genero">Filtrar por género:</label>
      <select id="genero" value={genero} onChange={manejarCambio}>
        <option value="">Todos</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>
    </div>

  )
}

export default Filtros