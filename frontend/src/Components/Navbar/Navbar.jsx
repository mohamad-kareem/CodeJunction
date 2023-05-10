import React, { useState,useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import "./navbar.css"
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo/Logo';
import Nav from "../Languages/Lang"
const Navbar = () => {

  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [language, setLanguage] = useState(localStorage.getItem('lang') || 'en');

  const lan = Nav[language];


  const handleLogOut = () => {
		localStorage.removeItem('token');
		setToken(null)
		navigate('/login');
  };

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="navbar">
			<Logo/>
			<div className="links">
				<Link to="/session" className="linking">
					{lan.compiler}
				</Link>
				{token && (
					<Link to="/activities" className="linking">
						{lan.Dashboard}
					</Link>
       			)}
				<select className="language-dropdown" value={language} onChange={handleLanguageChange}>
					<option value="en">en</option>
					<option value="ch">ch</option>
       			 </select>
			    <ButtonComponent id="logout" className="linking" width='80px' onClick={handleLogOut}>{lan.Logout}</ButtonComponent>
			</div>
	</div>
  )
}

export default Navbar
