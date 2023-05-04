import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import "./personal.css"
import axios from 'axios';
import UserImage from '../UserImage/UserImage';
const PersonalInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
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

  const handleEditClick = () => {
    navigate('/profile');
  };
  
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
              <div className="edit-icon-container" onClick={handleEditClick}>
                <EditIcon className="edit-icon"/>
              </div>
    </div>
  )
}

export default PersonalInfo
