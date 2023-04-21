import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputForm = ({ label, name, value,type='text',icon,onChange,color=' rgb(65, 54, 93)',onKeyUp,backgroundColor}) => {
  return (
    <div className='inputBox'>
      <input 
        className='inner-input'
        type={type}
        style={{ backgroundColor: color }}
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
