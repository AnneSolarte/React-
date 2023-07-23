
import './App.css';
import React, { useState } from 'react'
import { MoviesList } from './components/MoviesList';
import { SearchBar } from './components/SearchBar';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddMovie } from './components/AddMovie';

function App() {

    const [moviesList, setMoviesListState] = useState([]);
    
  return (
    <div className='layout'>

        <Header/>

        <NavBar/>

        <hr/>

        <section className="content">
            <MoviesList moviesList={moviesList} setMoviesListState={setMoviesListState} />
        </section>

        <aside className='aside'>
            <SearchBar moviesList={moviesList} setMoviesListState={setMoviesListState}/>
            <AddMovie setMoviesListState={setMoviesListState}/>
            
            
        </aside>

        <Footer/>

    </div>
  );
}

export default App;
