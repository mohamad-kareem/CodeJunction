import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputForm = ({ label, name, value,type='text',icon,onChange ,onKeyUp}) => {
  return (
    <div className='inputBox'>
      <input 
        className='inner-input'
        type={type}
        name={name}
        value={value} 
        onChange={onChange}
        required={true}
        onKeyUp={onKeyUp}
      />
      <FontAwesomeIcon icon={icon} className="inputBox-icon" />
      <span className='label'>{label}</span>
    </div>
  );
};

export default InputForm;
