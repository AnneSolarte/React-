import React from 'react'

export const Contact = () => {
  return (
    <div className='contact'>

      <div className='text'>
          <h3>Contact</h3>
          <p>I would love to hear about your project and how i could help. Please fill in the form, and I'll get back to you as soon possible.</p>
      </div>
      
      <div className='form'>
          <form>
            <input type='text' placeholder='Name' name='name'/>
            <input type='email' placeholder='Email' name='email'/>
            <textarea placeholder='Message' name='message'/>
            <input type='submmit' value="Send" />
          </form>
      </div>
     
    </div>
  )
}
