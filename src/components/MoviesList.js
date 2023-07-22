import React, { useEffect } from 'react'

export const MoviesList = ({moviesList, setMoviesListState}) => {

  useEffect(() => { 
    getMovies();
  }, [])

  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    setMoviesListState(movies);

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
                  <button className="delete">Delete</button>
              </article>
              );
      })
          : <h2>There are no movies to show</h2>
      }
     
    </>
  )
}
