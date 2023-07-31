import React, { useRef } from 'react'

export const Form = () => {

  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const boxRef = useRef();


  const showForm = (e) => {
    e.preventDefault();

    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let messa = messageInput.current.value;

    let form = {
      name,
      email,
      messa
    }

    console.log(form)
    console.log(boxRef)
    let {current: box} = boxRef;
    box.classList.add("send");
    box.innerHTML = "Form send"


  }

  return (
    <div className='content'>
      
      <div ref={boxRef}>
          <h3>Form</h3>
      </div>
          
      
      <div className='form'>

          <form onSubmit={showForm}>
            <input type='text' placeholder='Name' ref={nameInput}/>
            <input type='email' placeholder='Email'  ref={emailInput}/>
            <textarea placeholder='Message' ref={messageInput}/>
            <input type='submit' value="Send"/>
          </form>

      </div>
     
    </div>
  )
}
