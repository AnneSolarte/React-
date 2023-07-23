import React from 'react'
import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Products } from '../components/Products'
import { Error } from '../components/Error'
import { Person } from '../components/Person'

export const Router = () => {
  return (
    <BrowserRouter>

        <header>
          <h1>Header</h1>
        </header>

        <nav>
            <ul>
              <li>
                <NavLink to="/home"
                    className={({isActive}) => isActive ? "activated" : "nonActivated"}
                    >Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                    className={({isActive}) => isActive ? "activated" : "nonActivated"}
                    >Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/products"
                    className={({isActive}) => isActive ? "activated" : "nonActivated"}
                    >Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/person"
                    className={({isActive}) => isActive ? "activated" : "nonActivated"}
                    >Person
                </NavLink>
              </li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/products' element={<Products/>} />
            <Route path='/person' element={<Person/> } />
            <Route path='/person/:firstName' element={<Person/> } />
            <Route path='/person/:firstName/:lastName' element={<Person/> } />
            <Route path='*' element={<Error/>} />

        </Routes>
    </BrowserRouter>
  )
}
