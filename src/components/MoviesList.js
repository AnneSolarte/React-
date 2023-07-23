import React, { useEffect, useState } from 'react'
import { EditMovie } from './EditMovie';

export const MoviesList = ({moviesList, setMoviesListState}) => {

  const [edit, setEdit] = useState(0);

  useEffect(() => { 
    getMovies();
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setMoviesListState(movies);

    return movies

  }

  const deleteMovie = (id) => {
    let moviesSaved = getMovies();

    let newMoviesList = moviesSaved.filter(movie => movie.id !== parseInt(id));
    
    setMoviesListState(newMoviesList);

    localStorage.setItem("movies", JSON.stringify(newMoviesList))
  }

  const editMovie = (id) => {
    setEdit(id);
    console.log(id)
  }

  return (
    <>
      {moviesList != null ? 
        moviesList.map(movie => {
          return (
              <article key={movie.id} className="movie">
                  <div className="img"></div>
                  <h3 className="tittle">{movie.tittle}</h3>
                  <p className="description">{movie.description}</p>
                  <button className="edit" onClick={() => editMovie(movie.id)}>Edit</button>
                  <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
                  
                  {edit === movie.id && (<EditMovie movie={movie} 
                                                    getMovies={getMovies} 
                                                    setEdit={setEdit}
                                                    setMoviesListState={setMoviesListState} />) }
              </article>
              );

              
      })
          : <h2>There are no movies to show</h2>
      }

      
     
    </>
  )
}
