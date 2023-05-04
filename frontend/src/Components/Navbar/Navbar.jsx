import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo/Logo';
const Navbar = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const handleLogOut = () => {
		localStorage.removeItem('token');
		setToken(null)
  };

  return (
    <div className="navbar">
			<Logo/>
			<div className="links">

				<Link to="/session" className="linking">
					Try now
				</Link>

				{token && (
					<Link to="/dashboard" className="linking">
						Dashboard
					</Link>
       			)}

			    <ButtonComponent id="logout" className="linking" width='80px' onClick={handleLogOut}> LogOut</ButtonComponent>
			</div>
	</div>
  )
}

export default Navbar
