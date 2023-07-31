import React from 'react'
import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { Form } from '../components/Form'



export const Router = () => {
  return (
    <BrowserRouter>

        <section className='content'>
            <Routes>
              <Route path='/' element={<Navigate to="/form"></Navigate>} />
              <Route path='/form' element={<Form/>} />

          </Routes>
        </section>
        
    </BrowserRouter>
  )
}
