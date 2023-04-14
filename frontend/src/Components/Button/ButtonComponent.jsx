import React from 'react'

const ButtonComponent = ({color="yellow",size,children,onClick}) => {
  const styles = {
    backgroundColor: color,
    fontSize: size,
    borderRadius: '15px',
  
  }

  return (
   <button className='button' style={styles} onClick={onClick}>{children}</button>
  );
};

export default ButtonComponent;
