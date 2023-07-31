import React, { useContext } from 'react'
import { Context } from '../context/context';

export const Home = () => {

  const {user} = useContext(Context);

  return (
    <div>
      <h3>Home</h3>

      <p>Hi {user.name} </p>
    </div>
  )
}
