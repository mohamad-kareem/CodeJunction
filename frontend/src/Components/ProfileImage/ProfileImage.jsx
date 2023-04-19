import React from 'react'

const ProfileImage = () => {
  
    

    function convertToBase64 (e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload= () =>{
            console.log(reader.result);
        }
    }
  return (
    <div className='image-wrapper'>
        <div className="inner-image-container">
            <input 
            accept='image/*'
            type='file'
            onChange={convertToBase64}
             />
        </div>
      
    </div>
  )
}

export default ProfileImage
