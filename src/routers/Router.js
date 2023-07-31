import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter, Navigate, NavLink} from 'react-router-dom';
import { Home } from '../components/Home';
import { Contact } from '../components/Contact';
import { Products } from '../components/Products';
import { Login } from '../components/Login';
import { Context } from '../context/context';



export const Router = () => {

  const {user, setUser} = useContext(Context);
  return (
    <BrowserRouter>

      <header className='header'>
          <h4>React UseContext</h4>

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

                {user.hasOwnProperty("nickname") && user.nickname !== null ? (
                  <>
                    <li>
                      <NavLink to="/" className={({isActive}) => isActive ? "activated" : "nonActivated"}>{user.nickname}</NavLink>
                    </li>

                    <li>
                      <a href='/#' onClick={e => {
                          e.preventDefault();
                          setUser({})
                      }}>Log out</a>
                    </li>
                  </>
                ): (
                  <li>
                    <NavLink to="/login" className={({isActive}) => isActive ? "activated" : "nonActivated"}>Login</NavLink>
                  </li>
                    
                )}


            </ul>
        </nav>

      </header>

        

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
