import React from 'react'
import Avatar from 'react-avatar';

const Client = ({username}) => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  return (
    <div className='client-container'>
      <Avatar color={randomColor} name={username} size={40} round="10px"/>
      <span className='username'>{username}</span>
    </div>
  )
}

export default Client
