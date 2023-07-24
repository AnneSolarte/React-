import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
    
  return (
    <nav className='nav'>
        <ul>
            <li>
                <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>

            <li>
                <NavLink to="/portfolio" activeClassName="active">Porfolio</NavLink>
            </li>

            <li>
                <NavLink to="/experience" activeClassName="active">Experience</NavLink>
            </li>

            <li>
                <NavLink to="/skills" activeClassName="active">Skills</NavLink>
            </li>

            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </nav>
  )
}
