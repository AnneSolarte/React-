import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate();

  const navigateContact = () => {
    navigate('/contact');
  };

  return (
    <div>
        <h3>This is a home page</h3>
        <button onClick={navigateContact}>Contact</button>
    </div>
  )
}
