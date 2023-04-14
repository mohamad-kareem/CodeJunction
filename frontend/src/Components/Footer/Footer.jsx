import React from 'react'
import Facbook from "../../icons/fb.png";
import  GitHub from "../../icons/git.png";
import Instagram from "../../icons/twit.png";
import Twitter from  "../../icons/twit.png";
import "./footer.css"
import CopyRight from '../CopyRight/CopyRight';
const Footer = () => {
  return (
    <div className="footer">
    <div className="info">
    <a href="https://CodeJunction.com/mobile-app"><p className='footer-details'>Mobile app</p></a>
    <a href="https://CodeJunction/community"><p className='footer-details'>Community</p></a>
    <a href="https://CodeJunction/company"><p className='footer-details'>Company</p></a>
    <a href="https://CodeJunction/help-desk"><p className='footer-details'>Help desk</p></a>
    <a href="https://CodeJunction/blog"><p className='footer-details'>Blog</p></a>
    <a href="https://CodeJunction/resources"><p className='footer-details'>Resources</p></a>
    </div>
    <div className="connect">
        <div className="icons-container">
            <img className="icons" src={Facbook} alt="facebook.png" />
            <img className="icons" src={Instagram} alt="instagram.png"/>
            <img className="icons" src={Twitter} alt="twitter.png"/>
            <img className="icons" src={GitHub} alt="github.png"/>
            <CopyRight/>
        </div>
    </div>
</div>
  )
}

export default Footer
