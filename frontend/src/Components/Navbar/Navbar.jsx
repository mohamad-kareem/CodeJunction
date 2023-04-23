import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import ButtonComponent from '../Button/ButtonComponent';
import Logo from '../Logo/Logo';
const Navbar = () => {


  return (
    <div className="navbar">
			<Logo/>
			<div className="links">
				<Link to="/home" className="linking">
					Home
				</Link>
				<Link to="/session" className="linking">
					Code Editor
				</Link>
                <Link to="/codes" className="linking">
					Codes
				</Link>
                <Link to="/ranking" className="linking">
					DashBoard
				</Link>
			    <ButtonComponent id="logout" className="linking" width='80px'> LogOut</ButtonComponent>
			</div>
	</div>
  )
}

export default Navbar
