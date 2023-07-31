import React, { useContext } from 'react'
import { Context } from '../context/context';

export const Login = () => {

  const { setUser} = useContext(Context);

  const loginUser = e => {
    e.preventDefault();

    let user = {
      nickname: e.target.name.value,
      name: e.target.name.value,
      email: e.target.email.value
    }

    setUser(user);
  }

  return (
    <div className=''>

      <h3>Login</h3>
        
      <div className='form'>
          <form onSubmit={loginUser}>
            <input type='text' placeholder='NickName' name='nickname'/>
            <input type='text' placeholder='Name' name='name'/>
            <input type='email' placeholder='Email' name='email'/>
            <input type='submit' value="Send" />
          </form>
      </div>
     
    </div>
  )
}
