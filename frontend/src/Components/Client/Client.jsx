import React from 'react'
import Avatar from 'react-avatar';
const Client = ({username}) => {
  return (
    <div className='Client-container'>
      <Avatar color={Avatar.getRandomColor('sitebase', ['yellow'])} name={username} size={55} round="15px"/>
      <span className='username'>{username}</span>
    </div>
  )
}

export default Client
