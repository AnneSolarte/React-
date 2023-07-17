import React, { useEffect } from 'react'

export const ShowComponent = () => {
    useEffect(()=>{
        alert("Montado");

        return () => {
            alert("Desmontado");
        };
    }, []);

  return (
    <div>
        <hr/>
       <p>Hi, Emily</p>
    </div>
  )
}
