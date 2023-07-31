import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, NavLink} from 'react-router-dom';
import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { Products } from '../components/Products';
import { Login } from '../components/Login';



export const Router = () => {
  return (
    <BrowserRouter>

        <nav className='navBar'>
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
                <NavLink to="/login"
                    className={({isActive}) => isActive ? "activated" : "nonActivated"}
                    >Login
                </NavLink>
              </li>
            </ul>
        </nav>

        <section className='content'>
            <Routes>
              <Route path='/' element={<Navigate to="/home"></Navigate>} />
              <Route path='/home' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/products' element={<Products />} />
              <Route path='/login' element={<Login />} />

          </Routes>
        </section>
        
    </BrowserRouter>
  )
}
