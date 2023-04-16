import React from 'react'
import Avatar from 'react-avatar';
const Client = ({username}) => {
  return (
    <div className='client-container'>
      <Avatar color={Avatar.getRandomColor( ['yellow',"red"])} name={username} size={40} round="10px"/>
      <span className='username'>{username}</span>
    </div>
  )
}

export default Client
