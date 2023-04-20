import React from 'react'
import "./InputForm.css"
import ButtonComponent from '../Button/ButtonComponent'
const InputForm2 = () => {
  return (
   
    <div className='profile_form-container'>
            <div className="align">
              
            <span className='curly-braces'>&#123;</span> &nbsp;&nbsp; <label>Name&nbsp;:&nbsp;</label>
                <input
                    id="username" 
                    type="text"
                    name="username"/>
            </div>
            <div className="align">
                <label>Email&nbsp;:&nbsp;</label>
                 <input 
                    id="email"
                    type="text"
                    name="email"/>
            </div>

            <div className="align">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <label>GitHub&nbsp;:&nbsp;</label>
                 <input 
                    id="email"
                    type="text"
                    name="github"
                    />   &nbsp;&nbsp;  <span className='curly-braces'>&#125;</span> 
            </div>

         <ButtonComponent children={"Save"} width='100px' margin={40}/>
         </div>
   
  )
}

export default InputForm2
