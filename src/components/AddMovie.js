import React, { useState } from 'react'
import { saveStorage } from '../helpers/saveStorage';

export const AddMovie = () => {

  const tittleComponent = "Add Movie"

  const [movieState, setMovieState] = useState({
    tittle: "",
    description: ""
  })

  const { tittle, description} = movieState;

  const getMovieData = (e) => {
    e.preventDefault();

    let target = e.target;
    let tittle = target.tittle.value;
    let description = target.description.value;

    let movie = {
      id: new Date().getTime(),
      tittle,
      description
    }

    setMovieState(movie);

    saveStorage("movies", movie)
    
  }

  

  return (
    <div className="add">
      <h3>{tittleComponent}</h3> 

      <form onSubmit={getMovieData}>
          <input  type="text" 
                  id='tittle'
                  name='tittle'
                  placeholder="Tittle"/>

          <textarea id='description'
                    name="description" 
                    placeholder="Description"></textarea>

          <input  type="submit" 
                  id=""
                  value="save"/>
      </form>
    </div>
  )
}
