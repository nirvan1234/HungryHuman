import React, { useRef } from 'react'


const Contact = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const handleForm = (e) =>{
     e.preventDefault();
     console.log(nameRef.current.value);
     console.log(emailRef.current.value);
    }

  return (
    <div>
      
      <h1>contact</h1>
      <form onSubmit={handleForm}>
        <label>Name</label>
        <input ref={nameRef} placeholder='Name' name='userFirstName' type='text' />
        <label>Email</label>
        <input ref={emailRef} placeholder='Email' name='userLastName' type='text'  />
        <button>
            Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
