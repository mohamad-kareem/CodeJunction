import React,{useState} from 'react'

const ProfileImage = () => {
  
    const [image,setImage]=useState("");

    function convertToBase64 (e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload= () =>{
            console.log(reader.result);
            setImage(reader.result);
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
             {image==="" || image===null?"" : <img alt='profile-pic' width={200} height={200} src={image}/>}
            
        </div>
      
    </div>
  )
}

export default ProfileImage
