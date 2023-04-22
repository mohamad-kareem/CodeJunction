import React from 'react'
import ButtonComponent from '../Button/ButtonComponent';
import InputForm from '../InputForm/InputForm';
import "./createfolder.css"
const CreateFolder = ({HideFolder}) => {
  return (
    <div className='Create-code-folder-wrapper'>
      
       
      <div className='sign-in-up-container'>
        
             <div className="folder-inner-form">
             <h2 className='folder-header'>Create Folder</h2>
                  <InputForm
                    label="Title"
                    name="Title"
                    type='text'
                    color=' #0F0A36'
                    
                />
                   <InputForm
                    label="Description"
                    name="Description"
                    color=' #0F0A36'
                    isTextarea={true}
                    height={150}
                />
                <div className="folder-buttom">
                <ButtonComponent color="yellow"size="15px" width='100px'>Create</ButtonComponent> 
                <ButtonComponent color="yellow"size="15px" width='100px'marginLeft={20} onClick={HideFolder} >Close</ButtonComponent>
                </div>
                
                </div>
          </div>
          
    </div>
  )
}

export default CreateFolder
