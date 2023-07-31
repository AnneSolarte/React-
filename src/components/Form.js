import React, { useEffect, useReducer } from 'react'
import { gameReducer } from '../reducers/gameReducer';

const init = () => {
  return JSON.parse(localStorage.getItem("games")) || [];
  
}

export const Form = () => {

  const [ games, dispatch] = useReducer( gameReducer, [], init);

  useEffect(()=>{
    localStorage.setItem("games", JSON.stringify(games));
  }, [games])

  const addGame = (e) => {
    e.preventDefault();

    let game = {
      id: new Date().getTime(),
      name: e.target.name.value,
      description: e.target.description.value,
    }

    console.log(game)

    const addAction = {
      type: "add",
      payload: game
    }

    dispatch(addAction);
  }

  const deleteGame = (id) => {
    
    const deleteAction = {
      type: "delete",
      payload: id
    }

    dispatch(deleteAction);

  }

  const editGame = (e, id, des) => {

    let game = {
      id,
      name: e.target.value,
      description: des,
    }
    
    const editAction = {
      type: "edit",
      payload: game
    }

    dispatch(editAction);

  }

  return (
    <div className='content'>
      
      <div>
          <h3>Videogames</h3>
      </div>
          
      <div>
          <h4>GamesList: {games.length} </h4>

          {
            games.map((game)=> (
              <li key={game.id}>
                {game.name} {game.description}
                &nbsp;
                <button onClick={e => deleteGame(game.id)}>X</button>
                &nbsp;
                <input type='text' onBlur={e => editGame(e, game.id, game.description)}/>
              </li>
            ))
          }
      </div>
      
      <div className='form'>

          <form onSubmit={addGame}>
            <input type='text' placeholder='Name' name='name'/>
            <input type='text' placeholder='Description' name='description' />
            <input type='submit' value="Send"/>
          </form>

      </div>
     
    </div>
  )
}
