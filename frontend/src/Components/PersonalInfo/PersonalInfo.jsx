import React,{useState,useEffect} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import "./personal.css"
import axios from 'axios';
import UserImage from '../UserImage/UserImage';
const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get('http://localhost:8000/userInfo', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setUserInfo(response.data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, []);
  return (
    <div className="personal-info">
              <div className="inner-personal-info">
                  <div className="image">
                  <UserImage className={"small-pic"} disableChange={true}/>
                  </div>
                  <div className="personal-text">
                      <h2 className='Username'>{userInfo.username}</h2>
                      <p className='Job'>{userInfo.job}</p>
                      <h3 className='Profession'>{userInfo.profession}</h3>
                  </div>
              </div>
              <div className="edit-icon-container">
                <EditIcon className="edit-icon" />
              </div>
    </div>
  )
}

export default PersonalInfo
