import React, { useEffect } from 'react'

export const MoviesList = ({moviesList, setMoviesListState}) => {

  useEffect(() => { 
    getMovies();
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setMoviesListState(movies);

    return movies

  }

  const deleteMovies = (id) => {
    let moviesSaved = getMovies();

    let newMoviesList = moviesSaved.filter(movie => movie.id !== parseInt(id));
    
    setMoviesListState(newMoviesList);

    localStorage.setItem("movies", JSON.stringify(newMoviesList))
  }

  return (
    <>
      {moviesList != null ? 
        moviesList.map(movie => {
          return (
              <article key={movie.id} className="movie">
                  <div className="img"></div>
                  <h3 className="tittle">{movie.tittle}</h3>
                  <p className="description">{movie.tittle}</p>
                  <button className="edit">Edit</button>
                  <button className="delete" onClick={() => deleteMovies(movie.id)}>Delete</button>
              </article>
              );
      })
          : <h2>There are no movies to show</h2>
      }
     
    </>
  )
}
