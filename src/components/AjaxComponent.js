import React, { useEffect, useState } from 'react';

export const AjaxComponent = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = () => {

    setTimeout(async()=>{
      try{
        const response = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await response.json();
        console.log(data);
        setUsers(data);
        setLoading(false)
      }catch(error){
        console.log(error.message)
      }
      
    }, 2000)
    
  };

  useEffect(() => {
    getUsers();
  }, []);

  if(loading === true ){
    return (
      <div>
        <h3>Data loading...</h3>
      </div>
    )
  }else {
    return (
      <div>
        <h3>User list from Ajax</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.first_name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
};