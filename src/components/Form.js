import React, { useEffect, useState } from 'react';

export default function Form() {
  const [user, setUser] = useState({});

  const getDataUser = e => {
    e.preventDefault();

    let datos = e.target;

    let dataUser = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      signo: datos.signo.value
    };

    console.log(dataUser);
    setUser(dataUser);
  };

  // Sólo se ejecuta una vez
  useEffect(() => {
    console.log("You have loaded the component");
  }, []);

  return (
    <div>
      <h3>Form</h3>
      <form onSubmit={getDataUser}>
        <input type="text" placeholder="Name" name="nombre" />
        <input type="text" placeholder="Apellido" name="apellido" />
        <select name="signo">
          <option value="aries">Acuario</option>
          <option value="tauro">Tauro</option>
          <option value="géminis">Géminis</option>
          <option value="cáncer">Cáncer</option>
          <option value="leo">Leo</option>
        </select>
        <input type="submit" value="Enviar" />
      </form>

      <div>
        <h3>User: {user.nombre}, {user.apellido}, {user.signo} </h3>
      </div>
    </div>
  );
}

