import React from 'react'
import "./InputForm.css"
const InputForm2 = () => {
  return (
    <div className='profile_form-container'>
        <div className="profile_form-block">
            <input id="userName" 
                type="text"
                name="username"/>

            <input id="Email"
                    type="text"
                    name="Email"/>

            <input id="github"
                    type="text"
                    name="github"/>

            <button id="register-button">Register</button> 
         </div>
    </div>
  )
}

export default InputForm2
