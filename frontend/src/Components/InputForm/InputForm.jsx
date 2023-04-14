import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputForm = ({ label, name, value, icon }) => {
  return (
    <div className='inputBox'>
      <input 
      className='inner-input'
        type="text"
        name={name}
        value={value} 
      />
      <FontAwesomeIcon icon={icon} className="inputBox-icon" />
      <span>{label}</span>
    </div>
  );
};

export default InputForm;
