import React from 'react'

export default function Eventos() {

    const handleClick = (e, name) => {
        console.log("Has dado click: " + name)
    }

    const handleDoubleClick = (e, name) => {
        console.log("Has dado doble click: " + name)
    }

    const moveClick = (e, action) => {
        console.log("Mouse: " + action )
    }

    const inside = () => {
        console.log("Inside ")
    }

    const outside = () => {
        console.log("Outside ")
    }

  return (
    <div>
        <h3>Eventos</h3>
        <button onClick={ e => handleClick(e, "Emily")}>Click me :3</button>
        <button onDoubleClick={ e => handleDoubleClick(e, "Emily")}>DoubleClick me :3</button>
        <div className='Caja'
            onMouseEnter={e => moveClick(e, "enter")}
            onMouseLeave={e => moveClick(e, "leave")}
        >
        Walk over me
        </div>
        <input 
            type='text'
            onFocus = { inside }
            onBlur = { outside }
            placeholder = 'Enter your name'
        />
    </div>
    
  )
}
