import React, {useEffect, useState} from 'react'
import PropType from "prop-types"
import { ShowComponent } from './ShowComponent';

export default function Exercise() {

  const [user, setuser] = useState("Anne");
  const [date, setDate] = useState("01-01-2000");
  const [counter, setCounter] = useState(0);

  const moodUser = (e) => {
      setuser(e.target.value);
  }

  const moodDate = (e) => {
    setDate(new Date().toLocaleDateString());
  }
  
  //Sólo se ejecuta una vez
  useEffect(()=>{
    console.log("You have loaded the component")
  }, [])

  //Sólo se ejecuta cuando se modifica la propiedad user
  useEffect(()=>{
    setCounter(counter+1);
    console.log("You have modified the user:" +  counter + "times");
  },  [user]);
  
  
return (
  <div>
      <h3>Hook useEffect</h3>
      <p>Your user: <strong className = { counter >= 10 ? "label label-green" : "label"} >{user}</strong></p>
      <p>Date: <strong>{date}</strong></p>

      <p>
        <input 
            type='text'
            onChange = { e => moodUser(e, e.target.value)}
            placeholder = 'Change your user'
        />

        <button onClick={moodDate}>Change to current date</button>
      
      </p>
  </div>
  
)
}

Exercise.propType = {
  year: PropType.number.isRequired
}
