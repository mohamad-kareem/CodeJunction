import React, { useState,useContext } from 'react'
import { UserContext } from '../../Context/Context';
import { Link,useNavigate } from 'react-router-dom';
import "./navbar.css"
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo/Logo';
import {Nav} from "../Languages/Lang"
const Navbar = () => {
  const userlang=useContext(UserContext)
  const lan =Nav[userlang.language]

  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogOut = () => {
		localStorage.removeItem('token');
		setToken(null)
		navigate('/login');
  };

  const handleLanguageChange = (event) => {
    userlang.setLanguage(event.target.value);
  };

  return (
    <div className="navbar">
			<Logo />
			<div className="links">
				<Link to="/session" className="linking">
					{lan.compiler}
				</Link>
				{token && (
					<Link to="/activities" className="linking">
						{lan.Dashboard}
					</Link>
       			)}
				<select className="language-dropdown" value={userlang.language} onChange={handleLanguageChange}>
					<option value="en">en</option>
					<option value="ch">ch</option>
					<option value="de">de</option>
       			 </select>
			    <ButtonComponent id="logout" className="linking" width='80px' onClick={handleLogOut}>{lan.Logout}</ButtonComponent>
			</div>
	</div>
  )
}

export default Navbar
