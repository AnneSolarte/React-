import React from "react";

const MyComponent = () => {
    const usuario = {
        nombre : "Anne",
        edad : "18",
        signo: "géminis"
    }
    return (
        <div className="box">
            <hr/>
            <h2>My component</h2>
            <h4>User</h4>
            <ul>
                <li>Name: {usuario.nombre}</li>
                <li>Age: {usuario.edad}</li>
                <li>Zodiacal Sign: {usuario.signo}</li>
            </ul>
        </div>
    )

}
export default MyComponent