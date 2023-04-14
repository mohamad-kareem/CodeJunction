import React from 'react';
const InputBox = ({ label, name, value }) => {
  return (
    <div className='inputBox'>
      <input 
      className='inner-input'
        type="text"
        name={name}
        value={value} 
      />
      <span>{label}</span>
    </div>
  );
};

export default InputBox;
