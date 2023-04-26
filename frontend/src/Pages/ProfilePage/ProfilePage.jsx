import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./profilepage.css"
import {faEnvelope,faUserSecret,faBriefcase, faUserTie} from '@fortawesome/free-solid-svg-icons';
import InputForm from '../../Components/InputForm/InputForm';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import emptyImage from "../../assets/empty-pic.jpg"
import axios from 'axios';
const ProfilePage = () => {

  const [image, setImage] = useState(emptyImage);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [profession, setProfession] = useState('');

  const handleImageChange = (event) => {
    const selectedImage = URL.createObjectURL(event.target.files[0]);
    setImage(selectedImage);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfileData = {};
    axios
      .put('http://127.0.0.1:8000/update', updatedProfileData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
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
              <img src={image} className='pic' alt="empty-pic" />
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
                    value={username} setValue={setUsername}
                />
                  <InputForm
                    label="email address"
                    name="email"
                    icon={faEnvelope}
                    value={email} setValue={setEmail}
                />
                <InputForm
                    label="Job"
                    name="Job"
                    icon={faBriefcase}
                    value={job} setValue={setJob}
                />
                <InputForm
                    label="profession"
                    name="profession"
                    icon={faUserTie}
                    value={profession} setValue={setProfession}
                />
                <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>Update Profile</ButtonComponent> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
