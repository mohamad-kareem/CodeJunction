import React,{useState,useContext} from 'react'
import { UserContext } from '../../Context/Context';
import SideBar from '../../Components/SideBar/SideBar'
import "./profilepage.css"
import {faEnvelope,faUserSecret,faBriefcase, faUserTie} from '@fortawesome/free-solid-svg-icons';
import InputForm from '../../Components/InputForm/InputForm';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import axios from 'axios';
import UserImage from '../../Components/UserImage/UserImage';
import TopNav from '../../Components/TopNav/TopNav';
import { ProfileTranslation } from '../../Components/Languages/Lang';
import { toast } from 'react-hot-toast';
const ProfilePage = () => {

  const userlang=useContext(UserContext)
  const lan = ProfileTranslation[userlang.language]

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
    toast.success('Profile has been updated.');
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
       <TopNav title={lan.profile}/>
        <p className='text-anime'>{lan.animetext}</p>
        <div className="profile-buttom">
          <div className="left-profile">
          <UserImage/>
          </div>
          <div className="right-profile">
            <div className='sign-in-up-container'>
            <div className="inner-form">
              
                  <InputForm
                    label={lan.username}
                    name="username"
                    type='text'
                    icon={faUserSecret}
                    value={username} 
                    onChange={handleUsernameChange}
                />
                  <InputForm
                    label={lan.email}
                    name="email"
                    icon={faEnvelope}
                    value={email} 
                    onChange={handleEmailChange}
                />
                <InputForm
                    label={lan.job}
                    name="Job"
                    icon={faBriefcase}
                    value={job} 
                    onChange={handleJobChange}
                />
                <InputForm
                    label={lan.profession}
                    name="profession"
                    icon={faUserTie}
                    value={profession} 
                    onChange={handleProfessionChange}
                />
                <ButtonComponent color="yellow"size="15px" onClick={handleSubmit}>{lan.update}</ButtonComponent> 
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
