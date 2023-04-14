import React from 'react'
import { Link } from 'react-router-dom';
import "./navbar.css"
const Navbar = () => {


  return (
    <div className="navbar">
			<div className="logo">
				<span className='partLogo'>Code</span>Junction
			</div>
			<div className="links">
				<Link to="/home" className="linking">
					Home
				</Link>
				<Link to="/editor" className="linking">
					Code Editor
				</Link>
                <Link to="/codes" className="linking">
					Codes
				</Link>
                <Link to="/dashboard" className="linking">
					DashBoard
				</Link>
			
			</div>
		</div>
  )
}

export default Navbar
