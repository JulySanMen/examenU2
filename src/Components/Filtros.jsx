import React from 'react'

const Filtros = ({onFilter}) => {
  const [genero,setGenero] = useState('');

  const manejarCambio = (e) => {
    setGenero(e.target.value);
  return (
    <div>Filtros</div>

  )
}

export default Filtros