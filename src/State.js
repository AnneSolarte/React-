import React, {useState} from 'react'

export default function State() {

    const [name, setName] = useState("Name")

    const changeName = (e, newName) => {
        setName(newName)
    }

  return (
    <div>
        <h3>Hook useState</h3>
        <p>Your name: <strong className='name'>{name}</strong></p>
        <button onClick={ e => changeName(e, "Emily")}>Click me :3</button>
        <input 
            type='text'
            onChange = { e => changeName(e, e.target.value)}
            placeholder = 'Change your name'
        />
    </div>
    
  )
}
