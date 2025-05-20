import React from "react";
import { useEffect } from "react";

const useMovies = (key, initialValue) => {
  const [movies, setMovies] = React.useState(() => {
    const guardado = localStorage.getItem(key);
    return guardado ? JSON.parse(guardado) : initialValue
  });

  useEffect(() => {
    localStorage.setItem(key.JSON.stringify(movies));
  }, [movies, key]);

  const crearMovies = (titulo, descripcion, genero) => {
    const nuevaPelicula = { id: Date.now(), titulo, descripcion, genero };
    setMovies((prevMovies) => [...prevMovies, nuevaPelicula]);
  };
  

  const editarMovies = (id, nuevosDatos) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, ...nuevosDatos } : movie
      )
    );
  };

  return { movies, crearMovies, editarMovies};
};

export default useMovies;
