import React, {useState} from 'react'
import PropType from "prop-types"

export default function Exercise( {year}) {

    const [yearNow, setName] = useState(year)

    const increaseYear = () => {
        setName(yearNow + 1)
    }

    const decreaseYear = () => {
      setName(yearNow - 1)
    }

    const changeYear = (e) => {
      setName(Number(e.target.value))
    }

  return (
    <div>
        <h3>Exercise year</h3>
        <div className='box'>
            <button onClick={ increaseYear}>+</button>
            <p>Year: <strong className='year'>{yearNow}</strong></p>
            <button onClick={ decreaseYear}>-</button>
        </div>

        <input
            type='number'
            onChange = {changeYear}
            placeholder='Change year'
        ></input>
        

    </div>
    
  )
}

Exercise.propType = {
  year: PropType.number.isRequired
}
