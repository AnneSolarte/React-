import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <div>
        <h3>Error 404</h3>
        <p>Page not found</p>
        <Link to="/home">Go back to Home</Link>
    </div>
  )
}


