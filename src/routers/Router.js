import React from 'react'
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from '../components/Home'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Experience } from '../components/Experience'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'
import { Portfolio } from '../components/Portfolio'


export const Router = () => {
  return (
    <BrowserRouter>

        <Header/>

        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/skills' element={<Skills/>} />

        </Routes>

        <Footer/>

    </BrowserRouter>
  )
}
