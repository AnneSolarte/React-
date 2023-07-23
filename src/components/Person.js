import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Person = () => {

  const { firstName, lastName} = useParams();
  console.log( firstName, lastName)
  const navigate = useNavigate();

  const sendPage = (e) => {
    e.preventDefault();
    let firstName = e.target.firstName.value;
    let lastName = e.target.lastName.value;

    let url = '/person/' + firstName + '/' + lastName

    if(firstName.length <= 0 && lastName <= 0 ){
      navigate("/home")
    } else {
      navigate(url)
    }

  }

  return (
    <div>
        {!firstName && <h2>There is no person to show</h2> }
        {firstName && <h2>Page to: {firstName} {lastName} </h2> }

        <form onSubmit={sendPage}>
          <input type='text' name='firstName' />
          <input type='text' name='lastName' />
          <input type='submit'/>
        </form>
        
        <p>This is the person page</p>
    </div>
  )
}