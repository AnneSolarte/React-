import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>

            <li>
                <NavLink to="/portfolio">Porfolio</NavLink>
            </li>

            <li>
                <NavLink to="/experience">Experience</NavLink>
            </li>

            <li>
                <NavLink to="/skills">Skills</NavLink>
            </li>

            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}
