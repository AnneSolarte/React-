import React, { useState } from 'react'

export const SearchBar = ({moviesList, setMoviesListState}) => {

  const [quest, setQuest] = useState("");
  const [notFound, setNotFound] = useState(false)
  
  const showResults = (e) => {
    setQuest(e.target.value);

    let moviesFounded = moviesList.filter(movie => {
      return movie.tittle.toLowerCase().includes(quest.toLowerCase());
    })

    if(quest.length <= 1 || moviesFounded <= 0){
      moviesFounded = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setMoviesListState(moviesFounded);
  }

  return (
    <div className="search">
        <h3>Search a movie {quest}</h3>

        {(notFound === true && quest.length > 2) && (
          <span className='notFound'>No match found</span>
        )}

        <form action="sdsd">
            <input type='text' 
                    onChange={showResults}
                    autoComplete='off'
                    name= "quest"/>
            <button>Search</button>
        </form>
    </div>
  )
}
