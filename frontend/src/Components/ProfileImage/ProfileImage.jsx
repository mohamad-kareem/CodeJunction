import React,{useState,useRef} from 'react'
import emptyImage from "../../assets/empty-pic.jpg"
import "./profile.css"
const ProfileImage = () => {
    const fileInputRef = useRef(null);
    const [image,setImage]=useState("");

    function convertToBase64 (e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload= () =>{
            console.log(reader.result);
            setImage(reader.result);
        }
    }
    function handleImageClick() {
      fileInputRef.current.click();
    }
  return (
    <div className='image-wrapper'>
        <div className="inner-image-container" onClick={handleImageClick}>
        {image? (<img className='profile-image' alt='profile-pic' src={image}/>):(<img className='no-image' alt='no-img' src={emptyImage}/>) }
            <input 
            accept='image/*'
            type='file'
             />
        </div>
      
    </div>
  )
}

export default ProfileImage
