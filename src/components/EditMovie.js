import React from 'react'

export const EditMovie = ({movie, getMovies, setEdit, setMoviesListState}) => {

  const tittleComponent = "Edit Movie"

  const saveChanges = (e, id) => {
    e.preventDefault();

    let target = e.target;

    const moviesSaved = getMovies();
    const index = moviesSaved.findIndex(movie => movie.id === id);
    console.log(index)

    let movieEdited = {
      id,
      tittle: target.tittle.value,
      description: target.description.value
    }
    console.log(movieEdited)

    moviesSaved[index] = movieEdited;

    localStorage.setItem("movies", JSON.stringify(moviesSaved));

    setMoviesListState(moviesSaved);
    setEdit(0);
  }

  return (
    <div className="editBox">
      <h3>{tittleComponent}</h3> 

      <form onSubmit={ e => saveChanges(e, movie.id)}>
          <input  type="text" 
                  name='tittle'
                  defaultValue={movie.tittle} />

          <textarea 
                    name="description" 
                    defaultValue={movie.description}></textarea>

          <input  type="submit" 
                  value="update"
                  className='update'/>
      </form>
    </div>
  )
}
