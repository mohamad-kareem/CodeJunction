import React from 'react'
import "./buttoncomponent.css"

const ButtonComponent = ({color="yellow",size,width="300px",margin,children,onClick}) => {
  const styles = {
    backgroundColor: color,
    fontSize: size,
    borderRadius: '15px',
    padding: '5px',
    outline: 'none',
    border: '1px solid yellow',
    width: width,
    margin:margin,
    cursor: 'pointer' 
  }

  return (
   <button className='button' style={styles} onClick={onClick}>{children}</button>
  );
};

export default ButtonComponent;
