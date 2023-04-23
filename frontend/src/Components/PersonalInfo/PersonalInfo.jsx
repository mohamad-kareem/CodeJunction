import React from 'react'
import emptyimage from "../../assets/empty-pic.jpg"
import EditIcon from '@mui/icons-material/Edit';
import "./personal.css"
const PersonalInfo = () => {
  return (
    <div className="personal-info">
              <div className="inner-personal-info">
                  <div className="image">
                     <img src={emptyimage} className='small-pic' alt="pic" />
                  </div>
                  <div className="personal-text">
                      <h2>mohamad karim</h2>
                      <p>Full stack web developer</p>
                      <h3>Computer and communication engineer.</h3>
                  </div>
              </div>
              <div className="edit-icon-container">
                <EditIcon className="edit-icon" />
              </div>
    </div>
  )
}

export default PersonalInfo
