import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
  const [randomColor, setRandomColor] = useState('#000000');

  useEffect(() => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setRandomColor(color);
  }, []);

  return (
    <div className='client-container'>
      <Avatar color={randomColor} name={username} size={40} round="10px"/>
      <span className='username'>{username}</span>
    </div>
  )
}

export default Client;
