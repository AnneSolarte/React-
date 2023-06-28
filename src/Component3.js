import React from 'react'
import PropTypes from 'prop-types'

export default function Component3({nombre, apellido, ficha} ) {
  return (
    <div className="box">
            <hr/>
            <h2>My component 3</h2>
            <h4>User</h4>
            <ul>
                <li>Name: {nombre}</li>
                <li>LastName: {apellido}</li>
                <li>RH: {ficha.RH}</li>
            </ul>
        </div>
  )
}

Component3.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

Component3.defaultProps = {
    nombre: "Usuario",
    apellido: "Apellido",
}
