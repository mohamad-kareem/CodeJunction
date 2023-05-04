import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo/Logo';
const Navbar = () => {

  const handleLogOut = () => {
	
		localStorage.removeItem('token');

		};

  return (
    <div className="navbar">
			<Logo/>
			<div className="links">

				<Link to="/session" className="linking">
					Try now
				</Link>

			    <ButtonComponent id="logout" className="linking" width='80px' onClick={handleLogOut}> LogOut</ButtonComponent>
			</div>
	</div>
  )
}

export default Navbar
