import React from 'react'
import Movies from '../Movies'
const Formulario = () => {
  
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center' >
       <form className="space-y-6" onSubmit={Movies}>
          <div>
            <input
              placeholder='titulo'
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              
            </label>
            <input
              placeholder="descrpcion"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black outline-none shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
            
            </label>
            <input
              placeholder="genero"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black outline-none shadow-sm transition"
            />
          </div>

          <button
            ype="submit"
            className="w-full py-3 bg-green-800 text-white rounded-lg 
             hover:scale-105  hover:brightness-110 transition-all duration-300 
             font-semibold text-lg"
          >
            Crear
          </button>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-800 text-white rounded-lg 
             hover:scale-105  hover:brightness-110 transition-all duration-300 
             font-semibold text-lg"
          >
            Editar
          </button>
          <button
            type="submit"
            className="w-full py-3 bg-blue-800 text-white rounded-lg 
             hover:scale-105  hover:brightness-110 transition-all duration-300 
             font-semibold text-lg"
          >
            Borrar
          </button>
        </form>
    </div>
  )
}

export default Formulario