import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./profilepage.css"
import {faEnvelope,faUserSecret,faMapMarker} from '@fortawesome/free-solid-svg-icons';

import InputForm from '../../Components/InputForm/InputForm';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import emptyImage from "../../assets/empty-pic.jpg"
const ProfilePage = () => {
  const [image, setImage] = useState(emptyImage);

  const handleImageChange = (event) => {
    const selectedImage = URL.createObjectURL(event.target.files[0]);
    setImage(selectedImage);
  };
  return (
  <div className='profile-wrapper'>
      <SideBar/>
    <div className="profile">

      <div className="profile-top">
      <h1 className='h1-edit-profile'>Edit profile</h1>
      </div>

      <div className="profile-buttom">
          <div className="left-profile">
          <label htmlFor="image-input">
              <img src={image} className='empty-pic' alt="empty-pic" />
            </label>
            <input id="image-input" type="file" onChange={handleImageChange} style={{ display: "none" }} />
          </div>
          <div className="right-profile">
            <div className='sign-in-up-container'>
             <div className="inner-form">
               
                  <InputForm
                    label="username"
                    name="username"
                    type='text'
                    icon={faUserSecret}
                />
                   <InputForm
                    label="email address"
                    name="email"
                    icon={faEnvelope}
                />
                <InputForm
                    label="location"
                    name="location"
                    icon={faMapMarker}
                />
                <ButtonComponent color="yellow"size="15px">Update Profile</ButtonComponent> 
                </div>
          </div>
      </div>
  </div>

    </div>

</div>
  )
}

export default ProfilePage
