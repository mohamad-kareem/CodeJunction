import React,{useState,useEffect} from 'react'
import emptyimage from "../../assets/empty-pic.jpg"
import EditIcon from '@mui/icons-material/Edit';
import "./personal.css"
import axios from 'axios';
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
        setUserInfo(response.data);
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
                     <img src={emptyimage} className='small-pic' alt="pic" />
                  </div>
                  <div className="personal-text">
                      <h2 className='Username'></h2>
                      <p className='Job'></p>
                      <h3 className='Profession'></h3>
                  </div>
              </div>
              <div className="edit-icon-container">
                <EditIcon className="edit-icon" />
              </div>
    </div>
  )
}

export default PersonalInfo
