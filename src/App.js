
import './App.css';
import React from 'react'
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddMovie } from './components/AddMovie';

function App() {

  return (
    <div className='layout'>

        <Header/>

        <NavBar/>

        <hr/>

        <section className="content">
            <MoviesList />
        </section>

        <aside className='aside'>
            <SearchBar/>
            <AddMovie/>
            
            
        </aside>

        <Footer/>

    </div>
  );
}

export default App;
