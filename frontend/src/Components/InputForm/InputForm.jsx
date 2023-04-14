import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputForm = ({ label, name, value, icon,onChange }) => {
  return (
    <div className='inputBox'>
      <input 
      className='inner-input'
        type="text"
        name={name}
        value={value} 
        onChange={onChange}
      />
      <FontAwesomeIcon icon={icon} className="inputBox-icon" />
      <span>{label}</span>
    </div>
  );
};

export default InputForm;
