
import './App.css';
import React, { useEffect, useState } from 'react'
import { Router } from './routers/Router';
import { Context } from './context/context';

function App() {

  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    return localUser || {}; // Inicializa como un objeto vacío si no hay datos en el Local Storage
  });

  useEffect(()=>{
    console.log("Changes in user")
    localStorage.setItem("user", JSON.stringify(user))
  }, [user])


  return (
    <div className='layout'>
      <Context.Provider value={{user, setUser}} >
      <Router/>
      </Context.Provider>
      
    </div>
    
  );
}

export default App;
