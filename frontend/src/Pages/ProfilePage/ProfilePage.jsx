import React,{useState} from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import "./profilepage.css"
import {faEnvelope,faUserSecret,faBriefcase, faUserTie} from '@fortawesome/free-solid-svg-icons';
import InputForm from '../../Components/InputForm/InputForm';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import axios from 'axios';
import UserImage from '../../Components/UserImage/UserImage';
const ProfilePage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [profession, setProfession] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleJobChange = (e) => setJob(e.target.value);
  const handleProfessionChange = (e) => setProfession(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfileData = {};
    if (username) {
      updatedProfileData.username = username;
    }
    if (email) {
      updatedProfileData.email = email;
    }
    if (job) {
      updatedProfileData.job = job;
    }
    if (profession) {
      updatedProfileData.profession = profession;
    }
    axios
      .put('http://127.0.0.1:8000/updateProfile', updatedProfileData, {
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
        <p className='text-anime'>"Your profile is your digital handshake with the world." - Amy Jo Martin</p>
        <div className="profile-buttom">
          <div className="left-profile">
          <UserImage/>
          </div>
          <div className="right-profile">
            <div className='sign-in-up-container'>
            <div className="inner-form">
              
                  <InputForm
                    label="username"
                    name="username"
                    type='text'
                    icon={faUserSecret}
                    value={username} 
                    onChange={handleUsernameChange}
                />
                  <InputForm
                    label="email address"
                    name="email"
                    icon={faEnvelope}
                    value={email} 
                    onChange={handleEmailChange}
                />
                <InputForm
                    label="Job"
                    name="Job"
                    icon={faBriefcase}
                    value={job} 
                    onChange={handleJobChange}
                />
                <InputForm
                    label="profession"
                    name="profession"
                    icon={faUserTie}
                    value={profession} 
                    onChange={handleProfessionChange}
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
