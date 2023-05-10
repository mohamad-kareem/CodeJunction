import React,{useContext} from 'react'
import "./logo.css"
import { UserContext } from '../../Context/Context';
import { LogoTranslate } from '../Languages/Lang';

const Logo = ({ padding , borderBottom}) => {

  const userlang=useContext(UserContext)
  const lan = LogoTranslate[userlang.language]

  const LogoStyle = { padding , borderBottom};

  return (
    <div className='logo-container' style={LogoStyle}>
        <div className="logo">
            <span className='partLogo'>{lan.code}</span>{lan.Junction}
        </div>
    </div>
  )
}

export default Logo
